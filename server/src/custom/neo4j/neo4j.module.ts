import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import neo4j from 'neo4j-driver';
import { typeDefs } from 'src/gql/type-defs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

export async function gqlProviderFactory(configService: ConfigService): Promise<
  Omit<ApolloDriverConfig, 'driver'>
> {

  const driver = neo4j.driver(
    configService.get<string>("NEO4J_URI"),
    neo4j.auth.basic(configService.get("NEO4J_USERNAME"), configService.get("NEO4J_PASSWORD")),
  );

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    // resolvers: resolvers(),
    features: {
      subscriptions: true,
      authorization: {
        key: {
          url: configService.get("jwksUri"),
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
        onConnect: (ctx) => {
          console.log('connected!');
          return true;
          // console.log(ctx.extra);
        },
        onDisconnect(ctx, code, reason) {
          console.log('disconnected!');
          // console.log(ctx, code, reason);
        },
        onSubscribe(ctx, message) {
          // console.log('subscribed!');
          // console.log(ctx, message);
        },
        onClose(ctx, code, reason) {
          // console.log('closed!');
          // console.log(ctx, code, reason);
        },
        onNext(ctx, message, args, result) {
          // console.log('next!');
          // console.log(message.payload.data, args, result);
        },
      },
    },
    context: async ({ req, extra, ...rest }) => {
      // console.log(rest);
      let list: any = {};

      const cookieHeader = extra?.request.headers.cookie;
      if (cookieHeader)
        cookieHeader.split(`;`).forEach(function (cookie) {
          let [name, ...rest] = cookie.split(`=`);
          name = name?.trim();
          if (!name) return;
          const value = rest.join(`=`).trim();
          if (!value) return;
          list[name] = decodeURIComponent(value);
        });
      let token = list?.accessToken ?? req?.cookies.accessToken;
      // console.log(list.accessToken);
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
          useFactory: async (configService: ConfigService) => await gqlProviderFactory(configService),
          inject: [ConfigService]
        }),
      ],
    };
  }
}
function cookieParser(cookieString) {
  // Return an empty object if cookieString
  // is empty
  if (cookieString === '') return {};

  // Get each individual key-value pairs
  // from the cookie string
  // This returns a new array
  let pairs = cookieString.split(';');

  // Separate keys from values in each pair string
  // Returns a new array which looks like
  // [[key1,value1], [key2,value2], ...]
  let splittedPairs = pairs.map((cookie) => cookie.split('='));

  // Create an object with all key-value pairs
  const cookieObj = splittedPairs.reduce(function (obj, cookie) {
    // cookie[0] is the key of cookie
    // cookie[1] is the value of the cookie
    // decodeURIComponent() decodes the cookie
    // string, to handle cookies with special
    // characters, e.g. '$'.
    // string.trim() trims the blank spaces
    // auround the key and value.
    obj[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(
      cookie[1].trim(),
    );

    return obj;
  }, {});

  return cookieObj;
}
