import { Module } from '@nestjs/common';
import { PostsService } from '@posts/posts.service';
import { PostsController } from '@posts/posts.controller';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
