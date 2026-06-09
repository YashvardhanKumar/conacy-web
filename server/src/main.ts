import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  try {
    console.log(process.env.CLIENT_URL);
    const app = await NestFactory.create(AppModule, {
      abortOnError: false,
      cors: {
        credentials: true,
        origin: process.env.CLIENT_URL,
      },
    });
    app.use(cookieParser());
    await app.listen(3001, '0.0.0.0');
  } catch (err) {
    console.error("FATAL BOOTSTRAP ERROR:");
    console.error(err);
    process.exit(1);
  }
}
bootstrap();
