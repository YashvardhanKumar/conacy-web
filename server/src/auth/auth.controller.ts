import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { CookieOptions, Request, Response } from 'express';
import { USERS } from './decorator/email.decorator';
import { CustomAuthGuard } from './auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  private optionsAccess: CookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  };
  private optionsRefresh: CookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  };
  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  async signUp(
    @Body() createUserDTO: CreateUserDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, hash, dob, name, username } = createUserDTO;
    // console.log(createUserDTO);

    const a = await this.authService.signUp(
      email,
      name,
      username,
      hash,
      dob,
    );

    if (a.isAuthenticated) {
      const { accessToken, refreshToken, isAuthenticated, username } = a;
      res
        .status(200)
        .cookie('accessToken', accessToken, this.optionsAccess)
        .cookie('refreshToken', refreshToken, this.optionsRefresh)
        .cookie('username', username, this.optionsAccess);
      return { isAuthenticated, username };
    }
  }
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @Put('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() body: any,
    @Req() req: Request,
  ) {
    // console.log(body, req.user, req.cookies);

    const { accessToken, refreshToken, isAuthenticated, username } =
      await this.authService.login(body.email, req.user);


    if (isAuthenticated) {
      res
        .cookie('accessToken', accessToken, this.optionsAccess)
        .cookie('refreshToken', refreshToken, this.optionsRefresh)
        .cookie('username', username, this.optionsAccess);
    }
    return { isAuthenticated, username };
  }
  @Post('verify')
  async verify(
    @Res({ passthrough: true }) res: Response,
    @Req() request: Request,
  ) {
    const accessToken = request.cookies['accessToken'];
    const refreshToken = request.cookies['refreshToken'];
    

    const { isAuthenticated, token, message, username } = await this.authService.verify(
      accessToken,
      refreshToken,
    );
    if (isAuthenticated) {
      // console.log("verify is authenticated");
      
      res.status(200).cookie('accessToken', token, this.optionsAccess);
      return { isAuthenticated, username };
    }
    res
      .status(401)
      .clearCookie('accessToken', this.optionsAccess)
      .clearCookie('refreshToken', this.optionsRefresh)
      .clearCookie('username', this.optionsAccess);
    throw new UnauthorizedException({ isAuthenticated, message });
  }

  // @Post('refresh_access_token')
  // async refreshAccessToken(
  //   @Res({ passthrough: true }) res: Response,
  //   @Req() request: Request,
  // ) {
  //   const refreshToken = request.cookies['refreshToken'];
  //   console.log(refreshToken);

  //   const data = await this.authService.refreshUserToken(refreshToken);
  //   const { accessToken } = data;

  //   if (accessToken) {
  //     res.cookie('accessToken', accessToken, this.options);
  //     return;
  //   }
  //   res
  //     .clearCookie('accessToken', this.options)
  //     .clearCookie('refreshToken', this.options)
  //     .clearCookie('uid', this.options);
  //   return data;
  // }

  @HttpCode(HttpStatus.OK)
  @UseGuards(CustomAuthGuard)
  @Put('logout')
  async logout(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const token = req.cookies['refreshToken'];
    
    await this.authService.logout(req['jwt'].email, token);
    res
      .clearCookie('accessToken', this.optionsAccess)
      .clearCookie('refreshToken', this.optionsRefresh)
      .clearCookie('username', this.optionsAccess);
    return { isAuthenticated: false, message: 'Logged out successfully' };
  }
}
