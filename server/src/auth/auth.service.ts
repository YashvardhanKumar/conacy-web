import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import { DateTime, LocalDateTime } from 'neo4j-driver';
import * as path from 'path';
import { OgmService } from 'src/custom/ogm/ogm.service';
import * as argon2 from 'argon2';
import { error } from 'console';
import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
@Injectable()
export class AuthService {
  private selectionSet: DocumentNode = gql`
    {
      users {
        id
        name
        email
        username
        dob
      }
    }
  `;
  constructor(
    private readonly config: ConfigService,
    private readonly ogm: OgmService,
  ) {}
  async sign(id: string, email: string) {
    const payload = { id, email };
    const accessToken = this.generateToken(payload, 5 * 60);
    const refreshToken = this.generateToken(payload, 30 * 24 * 60 * 60);
    return { accessToken: accessToken, refreshToken: refreshToken };
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
    await this.ogm.init();
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
  async login(email: string, password: string) {
    await this.ogm.init();
    const data = await this.ogm
      .model('User')
      .find({ where: { email }, selectionSet: this.selectionSet });
    if (data && data.length) {
      const verifyPass = await argon2.verify(data[0].hash, password);
      if (verifyPass) {
        const { accessToken, refreshToken } = await this.sign(
          data[0].id,
          email,
        );
        this.ogm
          .model('User')
          .update({ where: { email }, update: { refreshToken } });
        return { accessToken, refreshToken };
      }
    }
    return { error: 'User not found' };
  }
  async logout(email: string) {
    await this.ogm.init();
    await this.ogm
      .model('User')
      .update({ where: { email }, update: { refreshToken: null } });
  }

  async verify(email: string, accessToken: string, _refreshToken: string) {
    await this.ogm.init();
    const { refreshToken } = (
      await this.ogm.model('User').find({ where: { email } })
    )[0];
    let isAccessToken = this.verifyToken(accessToken);

    if (refreshToken != _refreshToken)
      return { error: 'Refresh token is wrong' };

    if (!isAccessToken) {
      const isRefreshToken = this.verifyToken(_refreshToken) as jwt.JwtPayload;
      console.log(isRefreshToken);

      if (!isRefreshToken) {
        return { isAuthenticated: false, error: 'Login Needed' };
      } else {
        const { id, email } = isRefreshToken;
        accessToken = this.generateToken({ id, email }, 5 * 60);
      }
    }
    return {
      isAuthenticated: true,
      token: { accessToken, refreshToken },
    };
  }

  generateToken(payload: jwt.JwtPayload, jwt_expire: number) {
    // const privateKey = fs.readFileSync(
    //   path.join(__dirname, '..', '..', '..', 'src', 'keys', 'rsa.key'),
    //   'utf8',
    // );
    const privateKey = this.config.get('PRIVATE_KEY');

    try {
      return jwt.sign(payload, privateKey, {
        expiresIn: jwt_expire,
        algorithm: 'RS256',
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  verifyToken(
    token: string,
    onError: Function = () => {},
  ): jwt.JwtPayload | null {
    // const publicKey = fs.readFileSync(
    //   path.join(__dirname, '..', '..', '..', 'src', 'keys', 'rsa.key.pub'),
    //   'utf8',
    // );

    const publicKey = this.config.get('PUBLIC_KEY');

    try {
      return jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
      }) as jwt.JwtPayload;
    } catch (err) {
      console.log(err);
      onError();
      return null;
    }
  }
}
