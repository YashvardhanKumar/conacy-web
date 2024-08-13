import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { OgmService } from 'src/custom/ogm/ogm.service';
import * as argon2 from 'argon2';
import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { JwtService } from '@nestjs/jwt';
import { Model } from '@neo4j/graphql-ogm';
@Injectable()
export class AuthService {
  private selectionSet = `
    {
      id
      name
      email
      username
    }
  `;
  constructor(
    private readonly ogmService: OgmService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}
  async sign(username: string, email: string) {
    const payload = { username, email };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: 5 * 60,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: 30 * 24 * 60 * 60,
    });
    return { accessToken, refreshToken };
  }

  async signUp(
    email: string,
    name: string,
    username: string,
    hash: string,
    dob: Date,
  ) {
    const User = this.ogmService.ogm.model('User');
    if (
      (await User.find({ where: { OR: [{ email }, { username }] } })).length ===
      0
    ) {
      const hsh = await argon2.hash(hash);
      console.log({ email, name, username, hash: hsh, dob });

      const data = await User.create({
        input: [{ email, name, username, hash: hsh, dob }],
      });
      const { accessToken, refreshToken } = await this.sign(
        data.users[0].username,
        email,
      );
      await User.update({ where: { username }, update: { refreshToken } });
      return {
        accessToken,
        refreshToken,
        isAuthenticated: true,
        username: data.users[0].username,
      };
    }
    throw new UnauthorizedException({
      error: 'User Already Exists',
      isAuthenticated: false,
    });
  }

  async validateUser(email: string, password: string) {
    const User = this.ogmService.ogm.model('User');
    const data = await User.find({
      where: { email },
    });
    if (data) {
      const verifyPass = await argon2.verify(data[0].hash, password);
      if (!verifyPass) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const { hash, refreshToken, ...res } = data[0];
      return { ...res, verifyPass };
    } else {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  async login(email: string, data: any) {
    const User = this.ogmService.ogm.model('User');

    // const data = await this.validateUser(email, password);
    if (!data.error && data.verifyPass) {
      const { accessToken, refreshToken } = await this.sign(
        data.username,
        email,
      );

      await User.update({
        where: { email },
        update: { refreshToken },
      });
      return {
        accessToken,
        refreshToken,
        isAuthenticated: true,
        username: data.username,
      };
    }
    throw new UnauthorizedException({ isAuthenticated: false });
  }

  async logout(email: string, refreshToken: string) {
    const User = this.ogmService.ogm.model('User');
    await User.update({
      where: { email },
      update: { refreshToken: null, blackList_PUSH: [refreshToken] },
    });
  }

  // async refreshUserToken(refreshToken: string) {
  //   const User = this.ogmService.ogm.model('User');
  //   const { id, email } = await this.jwtService
  //     .verifyAsync(refreshToken)
  //     .catch((e) => {
  //       if (e.message === 'jwt expired') {
  //         User.update({
  //           where: { id },
  //           update: { blackList_PUSH: [refreshToken] },
  //         });
  //       }
  //       throw new UnauthorizedException({
  //         message: 'Login Needed',
  //         isAuthenticated: false,
  //       });
  //     });
  //   const user = await User.find({
  //     where: { id, NOT: { blackList_INCLUDES: refreshToken } },
  //   });
  //   if (user.length && user[0].refreshToken === refreshToken) {
  //     const accessToken = await this.jwtService.signAsync(
  //       { id, email },
  //       {
  //         expiresIn: 5 * 60,
  //       },
  //     );
  //     return { accessToken };
  //   } else {
  //     throw new UnauthorizedException({
  //       message: 'Invalid Request',
  //       isAuthenticated: false,
  //     });
  //   }
  // }

  async verify(accessToken: string, _refreshToken: string) {
    const User = this.ogmService.ogm.model('User');
    if (!_refreshToken) {
      return { isAuthenticated: false, message: 'Invalid Request' };
    }
    let { username, email, exp } =
      this.jwtService.decode(_refreshToken, {
        complete: true,
        json: true,
      }).payload ?? {};

    const [u] = await User.find({
      where: { username, email },
      selectionSet: gql`
        {
          username
          email
          refreshToken
        }
      `,
    });
    console.log(
      _refreshToken &&
        u?.refreshToken &&
        u?.refreshToken == _refreshToken &&
        u?.username == username,
    );

    if (
      _refreshToken &&
      u?.refreshToken &&
      u?.refreshToken == _refreshToken &&
      u?.username == username
    ) {
      const time = Date.now() / 1000;

      if (exp <= time) {
        await User.update({
          where: { email },
          update: { refreshToken: null },
        });

        return {
          message: 'Login Required',
          isAuthenticated: false,
        };
      }

      try {
        const { exp } = await this.jwtService.verifyAsync(accessToken);
        console.log(exp - time);
      } catch (e) {
        if (e.message !== 'invalid signature') {
          accessToken = this.jwtService.sign(
            { username: u.username, email },
            { expiresIn: 5 * 60 },
          );
        }
      } finally {
        return {
          isAuthenticated: true,
          token: accessToken,
          username: u.username,
        };
      }
    }

    return {
      message: 'Login Required',
      isAuthenticated: false,
    };
  }

  // generateToken(payload: jwt.JwtPayload, jwt_expire: number) {
  //   // const privateKey = fs.readFileSync(
  //   //   path.join(__dirname, '..', '..', '..', 'src', 'keys', 'rsa.key'),
  //   //   'utf8',
  //   // );
  //   const privateKey = this.config.get('PRIVATE_KEY');

  //   try {
  //     return jwt.sign(payload, privateKey, {
  //       expiresIn: jwt_expire,
  //       algorithm: 'RS256',
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return null;
  //   }
  // }

  // verifyToken(
  //   token: string,
  //   onError: Function = () => {},
  // ): jwt.JwtPayload | null {
  //   // const publicKey = fs.readFileSync(
  //   //   path.join(__dirname, '..', '..', '..', 'src', 'keys', 'rsa.key.pub'),
  //   //   'utf8',
  //   // );

  //   const publicKey = this.config.get('PUBLIC_KEY');

  //   try {
  //     return jwt.verify(token, publicKey, {
  //       algorithms: ['RS256'],
  //     }) as jwt.JwtPayload;
  //   } catch (err) {
  //     console.log(err);
  //     onError();
  //     return null;
  //   }
  // }
}
