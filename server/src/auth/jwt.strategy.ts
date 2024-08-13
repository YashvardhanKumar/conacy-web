import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor( configService: ConfigService) {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("PUBLIC_KEY"),
      // secretOrKeyProvider: passportJwtSecret({
      //   cache: true,
      //   rateLimit: true,
      //   jwksRequestsPerMinute: 5,
      //   jwksUri: configService.get<string>('jwksUri'),
      // }),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    return { username: payload.username, email: payload.email };
  }
}
