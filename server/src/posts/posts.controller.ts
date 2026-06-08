import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from '@posts/posts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
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
