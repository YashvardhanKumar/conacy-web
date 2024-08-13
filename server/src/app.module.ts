import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Neo4jModule } from './custom/neo4j/neo4j.module';
import { typeDefs } from './gql/type-defs';
import { AuthModule } from './auth/auth.module';
import { OgmModule } from './custom/ogm/ogm.module';
import { AppController } from './app.controller';

import { PostsModule } from './posts/posts.module';
import { CloudinaryModule } from './custom/cloudinary/cloudinary.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRootAsync(),
    OgmModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        typeDefs,
        neo4jUrl: configService.get("NEO4J_URI"),
        neo4jUsername: configService.get("NEO4J_USERNAME"),
        neo4jPassword: configService.get("NEO4J_PASSWORD"),
      })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client','dist'),
      
    }),
    AuthModule,
    PostsModule,
    CloudinaryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        isGlobal: true,
        cloud_name: configService.get("CLOUDINARY_NAME"),
        api_key: configService.get("CLOUDINARY_API_KEY"),
        api_secret: configService.get("CLOUDINARY_API_SECRET"),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes({ path: 'auth/logout', method: RequestMethod.PUT });
  // }
}
