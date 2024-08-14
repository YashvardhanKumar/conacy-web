import {
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() // new ParseFilePipeBuilder()
    file //   .addFileTypeValidator({ fileType: 'image/jpeg' })
    //   .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
    //   .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    : Express.Multer.File,
  ) {
    // console.log(file);
    // return file;
    return this.postsService.uploadImageToCloudinary(file);
  }
  //     @Post('upload')
  //   @UseInterceptors(FileInterceptor('file'))
  //   uploadImage(@UploadedFile() file: Express.Multer.File) {
  //     return this.postsService.uploadImageToCloudinary(file);
  //   }
}
