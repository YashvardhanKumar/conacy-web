import * as jwt from 'jsonwebtoken';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as neo4j from 'neo4j-driver';
import { ConfigService } from '@nestjs/config';
import { OGM } from '@neo4j/graphql-ogm';
import { typeDefs } from 'src/gql/type-defs';
import { OgmService } from 'src/custom/ogm/ogm.service';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService,
    private readonly ogm: OgmService,
  ) {}
  async use(req: any, res: any, next: () => void) {
    try {
      const token =
        req.cookies?.accessToken ||
        req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }

      const { id } = this.authService.verifyToken(token);
      await this.ogm.init();
      const user = await this.ogm.model('User').find({ where: { id } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      req.users = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
