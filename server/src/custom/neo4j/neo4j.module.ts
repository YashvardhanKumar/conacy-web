import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import neo4j from 'neo4j-driver';
import { typeDefs } from '@gql/type-defs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

export async function gqlProviderFactory(
  configService: ConfigService,
): Promise<Omit<ApolloDriverConfig, 'driver'>> {
  const driver = neo4j.driver(
    configService.get<string>('NEO4J_URI'),
    neo4j.auth.basic(
      configService.get('NEO4J_USERNAME'),
      configService.get('NEO4J_PASSWORD'),
    ),
  );

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    // resolvers: resolvers(),
    features: {
      subscriptions: true,
      authorization: {
        key: {
          url: configService.get('jwksUri'),
        },
        verifyOptions: {
          algorithms: ['RS256'],
        },
      },
    },
  });

  const schema = await neoSchema.getSchema();

  await neoSchema.assertIndexesAndConstraints({
    options: { create: true },
  });

  return {
    playground: true,
    schema,
    installSubscriptionHandlers: true,
    subscriptions: {
      'graphql-ws': {
        path: '/graphql',
        connectionInitWaitTimeout: Infinity,
        onConnect: () => {
          console.log('connected!');
          return true;
        },
        onDisconnect() {
          console.log('disconnected!');
        },
      },
    },
    context: async ({ req, extra }) => {
      const list: any = {};

      const cookieHeader = extra?.request.headers.cookie;
      if (cookieHeader)
        cookieHeader.split(`;`).forEach(function (cookie) {
          const [rawName, ...rest] = cookie.split(`=`);
          const name = rawName?.trim();
          if (!name) return;
          const value = rest.join(`=`).trim();
          if (!value) return;
          list[name] = decodeURIComponent(value);
        });
      const token = list?.accessToken ?? req?.cookies.accessToken;
      return {
        token: token ? `Bearer ${token}` : '',
        sessionConfig: { database: 'neo4j' },
      };
    },
  };
}

@Module({})
export class Neo4jModule {
  static forRootAsync() {
    return {
      module: Neo4jModule,
      imports: [
        // Ensure you have your config module set up
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
          driver: ApolloDriver,
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) =>
            await gqlProviderFactory(configService),
          inject: [ConfigService],
        }),
      ],
    };
  }
}
