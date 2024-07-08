import {
  Body,
  Controller,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { USERS } from './decorator/email.decorator';
import { CustomAuthGuard } from './auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  async signUp(
    @Body() createUserDTO: CreateUserDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { id, email, hash, dob, name, username } = createUserDTO;
    console.log(createUserDTO);

    const a = await this.authService.signUp(
      id,
      email,
      name,
      username,
      hash,
      dob,
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    if (!a.error) {
      const { accessToken, refreshToken } = a;
      res
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options);
      return;
    }
    return a;
  }

  @UseGuards(AuthGuard('local'))
  @Put('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() body: any,
    @Req() req: Request,
  ) {
    console.log(body, req.user);

    const a = await this.authService.login(body.email, req.user);

    const options = {
      httpOnly: true,
      secure: true,
    };

    if (!a.error) {
      const { accessToken, refreshToken } = a;
      res
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options);
      return;
    }
    return a;
  }

  @Post('verify')
  async verify(
    @Res({ passthrough: true }) res: Response,
    @Req() request: Request,
  ) {
    // const incomingRefreshToken = request.cookies?.refreshToken ?? request.body.refreshToken;
    console.log(request.cookies);

    const accessToken = request.header('Authorization')?.replace('Bearer ', '');
    const data = await this.authService.verify(accessToken);
    const options = {
      httpOnly: true,
      secure: true,
    };
    if (data.isAuthenticated) {
      const { isAuthenticated, token } = data;
      res.cookie('accessToken', token, options);
      // res.cookie('refreshToken', token.refreshToken, options);
      return { isAuthenticated };
    }
    return data;
  }

  @UseGuards(CustomAuthGuard)
  @Put('logout')
  async logout(@Res({ passthrough: true }) res: Response, @USERS() users: any) {
    await this.authService.logout(users.email);
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie('accessToken', options)
      .cookie('refreshToken', options);
    return { message: 'Logged out successfully' };
  }
}
