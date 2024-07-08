import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(username: string, password: string) {
    const data = await this.authService.validateUser(username, password).catch((e) => {
      console.log(e);
      throw new UnauthorizedException(e.message);
    });
    
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      username: data.username,
      dob: data.dob,
      verifyPass: data.verifyPass,
    };
  }
}
