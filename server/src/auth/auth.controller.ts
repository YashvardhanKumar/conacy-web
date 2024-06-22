import { Body, Controller, Post, Put, Req, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { USERS } from './decorator/email.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @Post('sign')
  // async sign(
  //   @Res({ passthrough: true }) res: Response,
  //   @Body() createUserDTO: CreateUserDTO,
  // ) {
  //   const { email, id } = createUserDTO;
  //   const data = await this.authService.sign(id, email);
  //   const options = {
  //     httpOnly: true,
  //     secure: true,
  //   };
  //   res
  //     .cookie('accessToken', data.accessToken, options)
  //     .cookie('refreshToken', data.refreshToken, options);
  // }

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
      const { data, accessToken, refreshToken } = a;
      res
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshToken, options);
      return { data, accessToken, refreshToken };
    }
    return { error: 'User Already Exists!' };
  }

  @Put('login')
  async login(@Res({ passthrough: true }) res: Response, @Body() body: any) {
    const a = await this.authService.login(
      body.email,
      body.password,
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
      return { accessToken, refreshToken };
    }
    return { error: 'User Not Found' };
  }

  @Post('verify')
  async verify(
    @Res({ passthrough: true }) res: Response,
    @Req() request: Request,
  ) {
    const incomingRefreshToken =
      request.cookies?.refreshToken || request.body.refreshToken;
    const accessToken =
      request.cookies?.accessToken ||
      request.header('Authorization')?.replace('Bearer ', '');
    const data = await this.authService.verify(
      request.body.email,
      accessToken,
      incomingRefreshToken,
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    if (data.isAuthenticated) {
      res.cookie('accessToken', data.token.accessToken, options);
      res.cookie('refreshToken', data.token.refreshToken, options);
    }
    return data;
  }

  @Put('logout')
  async logout(
    @Res({ passthrough: true }) res: Response,
    @USERS() users,
  ) {
    
    await this.authService.logout(users.email);
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie('accessToken', options)
      .cookie('refreshToken', options);
    return { user: {}, message: "Logged out successfully" };
  }
}
