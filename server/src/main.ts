import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      // allowedHeaders: ['Content-Type', 'Authorization'],
      // exposedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      // preflightContinue: false,
      // optionsSuccessStatus: 204,
      // maxAge: 3600,
    },
  });
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
