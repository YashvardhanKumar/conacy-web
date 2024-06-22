import { ConfigurableModuleAsyncOptions, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import neo4j, { LocalDateTime } from 'neo4j-driver';
import { OGM } from '@neo4j/graphql-ogm';
import { typeDefs } from 'src/gql/type-defs';
import { Neo4jGraphQL } from '@neo4j/graphql';
import * as argon2 from 'argon2';
import { ApolloError, gql } from 'apollo-server';
import {
  CreateInfo,
  CreateUsersMutationResponse,
  User,
} from '../../generated/graphql';
import { DocumentNode, graphql } from 'graphql';
import { log } from 'console';
import { OgmModule } from '../ogm/ogm.module';
import { OGMConstructor } from '@neo4j/graphql-ogm/dist/classes/OGM';
import { ConfigModule, ConfigService } from '@nestjs/config';

const resolvers = (ogm: OGM) => {
  return {
    Mutation: {
      createUsers: async (
        object: any,
        params: any,
        ctx: any,
        resolverInfo: any,
      ) => {
        const dat = JSON.parse(JSON.stringify(params.input[0]));

        const selectionSet = gql`
          {
            users {
              id
              name
              email
              username
              hash
            }
            info {
              bookmark
              nodesCreated
              relationshipsCreated
            }
          }
        `;
        dat.hash = await argon2.hash(dat.hash);
        try {
          return(
            await ogm
              .model('User')
              .create({ input: dat, selectionSet, context: ctx }));
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export const gqlProviderFactory = async () => {
  const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

  const driver = neo4j.driver(
    NEO4J_URI,
    neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
  );
  const ogm = new OGM({
    driver,
    typeDefs,
    // debug: true,
    database: 'neo4j',
  });
  ogm.init();
  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    // debug: true,
    resolvers: resolvers(ogm),
    features: {
      authorization: {
        key: {
          url: 'http://localhost:3000/.well-known/jwks.json',
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
    context: async ({ req }) => ({
      token: req.headers.authorization,
      sessionConfig: { database: 'neo4j' },
    }),
  };
};

@Module({})
export class Neo4jModule {
  static forRootAsync(typeDefs: any) {
    return {
      module: Neo4jModule,
      imports: [
        // Ensure you have your config module set up
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
          driver: ApolloDriver,
          useFactory: gqlProviderFactory,
        }),
      ],
    };
  }
}
