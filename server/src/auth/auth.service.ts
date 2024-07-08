import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { OgmService } from 'src/custom/ogm/ogm.service';
import * as argon2 from 'argon2';
import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private User: any;
  private selectionSet: DocumentNode = gql`
    {
      id
      name
      email
      username
    }
  `;
  constructor(
    private readonly ogm: OgmService,
    private readonly jwtService: JwtService,
  ) {
    this.User = this.ogm.model('User');
  }
  async sign(id: string, email: string) {
    const payload = { id, email };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: 5 * 60,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: 30 * 24 * 60 * 60,
    });
    return { accessToken, refreshToken };
  }

  async signUp(
    id: string,
    email: string,
    name: string,
    username: string,
    hash: string,
    dob: Date,
  ) {
    const { accessToken, refreshToken } = await this.sign(id, email);
    if (
      (
        await this.ogm
          .model('User')
          .find({ where: { OR: [{ id }, { email }, { username }] } })
      ).length === 0
    ) {
      const hsh = await argon2.hash(hash);
      console.log({ id, email, name, username, hash: hsh, dob, refreshToken });

      const data = await this.ogm.model('User').create({
        input: { id, email, name, username, hash: hsh, dob, refreshToken },
        selectionSet: this.selectionSet,
      });

      return { data, accessToken, refreshToken };
    }
    return { error: 'User Already Exists' };
  }

  async validateUser(email: string, password: string) {
    const data = await this.ogm.model('User').find({
      where: { email },
    });
    console.log(data);
    if (data) {
      const verifyPass = await argon2.verify(data[0].hash, password);
      if (!verifyPass) {
        throw new UnauthorizedException("Invalid email or password");
      }
      console.log(verifyPass);
      const { hash, refreshToken, ...res } = data[0];
      return { ...res, verifyPass };
    } else {
      throw new UnauthorizedException("Invalid email or password");
    }
  }

  async login(email: string, data: any) {
    console.log(data);

    // const data = await this.validateUser(email, password);
    if (!data.error && data.verifyPass) {
      const { accessToken, refreshToken } = await this.sign(data.id, email);
      console.log({ accessToken, refreshToken });

      await this.ogm.model('User').update({
        where: { email },
        update: { refreshToken },
      });
      return { accessToken, refreshToken };
    }
    return data;
  }

  async logout(email: string) {
    await this.ogm
      .model('User')
      .update({ where: { email }, update: { refreshToken: null } });
  }

  async verify(accessToken: string) {
    let { id, email, ...other } = this.jwtService.decode(accessToken, {
      complete: true,
      json: true,
    }) as jwt.JwtPayload;

    const { refreshToken, ...data } = (
      await this.ogm.model('User').find({
        where: { id },
      })
    )[0];

    console.log({ id, email, ...other });

    const refreshTokenData: jwt.JwtPayload =
      this.jwtService.verify(refreshToken);

    console.log(refreshTokenData);

    const time = Date.now() / 1000;

    if (refreshTokenData.id != data.id || refreshTokenData.exp <= time) {
      await this.ogm.model('User').update({
        where: { email },
        update: { refreshToken: null },
      });
    } else if (refreshTokenData.id == id) {
      if (other.exp <= time) {
        const { id, email } = refreshTokenData;
        const payload = { id, email };

        accessToken = this.jwtService.sign(payload, {
          expiresIn: 5 * 60,
        });
      }

      return {
        isAuthenticated: true,
        token: accessToken,
      };
    }

    throw new UnauthorizedException({
      message: 'Login Needed',
      isAuthenticated: false,
    });
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
