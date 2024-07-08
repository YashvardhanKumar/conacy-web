import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    const response: Response = context.switchToHttp().getResponse();
    if (!token) {
      response
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .clearCookie('username');
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.verify(token);
      request['jwt'] = payload;
    } catch {
      response
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .clearCookie('username');
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const token = request.cookies['accessToken'];
    return token;
  }
}
