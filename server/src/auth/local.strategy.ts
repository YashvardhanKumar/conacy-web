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

  async validate(username: string, password: string): Promise<any> {
    const data = await this.authService.validateUser(username, password);
    if (data.error) {
      console.log(data);

      throw new UnauthorizedException(data.error);
    }
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
