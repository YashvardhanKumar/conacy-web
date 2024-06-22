import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Neo4jModule } from './custom/neo4j/neo4j.module';
import { config } from 'dotenv';
import { typeDefs } from './gql/type-defs';
import { AuthModule } from './auth/auth.module';
import { OgmModule } from './custom/ogm/ogm.module';
import * as neo4j from 'neo4j-driver';
import { OGM } from '@neo4j/graphql-ogm';
import { AuthMiddleware } from './auth/auth.middleware';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRootAsync(typeDefs),
    OgmModule.register({
      isGlobal: true,
      ogm: new OGM({
        typeDefs,
        debug: true,
        driver: neo4j.driver(
          process.env.NEO4J_URI,
          neo4j.auth.basic(
            process.env.NEO4J_USERNAME,
            process.env.NEO4J_PASSWORD,
          ),
        ),
      })
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'auth/logout', method: RequestMethod.PUT,  });
  }
}
