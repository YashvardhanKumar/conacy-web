import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { startStandaloneServer } from '@apollo/server/dist/esm/standalone';
import { ApolloServer } from '@apollo/server';
import { gqlProviderFactory } from './custom/neo4j/neo4j.module';
import * as dotenv from 'dotenv'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: 'http://localhost:3000',
      // exposedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      // preflightContinue: false,
      // optionsSuccessStatus: 204,
      // maxAge: 3600,
    },
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  dotenv.config();
  await app.listen(3001);
}
bootstrap();
