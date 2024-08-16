import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  console.log(process.env.CLIENT_URL);
  
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: process.env.CLIENT_URL,
    },
  });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
