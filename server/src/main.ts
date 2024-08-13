import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors'
import { startStandaloneServer } from '@apollo/server/dist/esm/standalone';
import { ApolloServer } from '@apollo/server';
import { gqlProviderFactory } from './custom/neo4j/neo4j.module';
import * as dotenv from 'dotenv'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: 'https://conacy.netlify.app',
      // origin: 'http://localhost:3000',
      
      // exposedHeaders: ['Content-Type', 'Authorization'],
      // preflightContinue: false,
      // optionsSuccessStatus: 204,
      // maxAge: 3600,
    },
  });
  // app.setGlobalPrefix('api');
  app.use(cookieParser());
  // app.use(cors({
  //   origin: 'http://localhost:3000',
  //   credentials: true,
  // }));
  await app.listen(3001);
}
bootstrap();
