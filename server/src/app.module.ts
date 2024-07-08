import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Neo4jModule } from './custom/neo4j/neo4j.module';
import { typeDefs } from './gql/type-defs';
import { AuthModule } from './auth/auth.module';
import { OgmModule } from './custom/ogm/ogm.module';
import { AppController } from './app.controller';

import { PostsModule } from './posts/posts.module';
import { CloudinaryModule } from './custom/cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRootAsync(),
    OgmModule.register({
      typeDefs,
      neo4jUrl: process.env.NEO4J_URI,
      neo4jUsername: process.env.NEO4J_USERNAME,
      neo4jPassword: process.env.NEO4J_PASSWORD,
    }),
    AuthModule,
    PostsModule,
    CloudinaryModule.forRootAsync({
      useFactory: () => ({
        isGlobal: true,
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      }),
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
