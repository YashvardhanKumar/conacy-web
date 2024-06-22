import { Neo4jGraphQL } from '@neo4j/graphql';
import * as neo4j from 'neo4j-driver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import path from 'path';
import fs from 'fs';
import { OGM } from '@neo4j/graphql-ogm';
import { GraphQLSchema } from 'graphql';
import { typeDefs } from './type-defs';

// export const gqlProviderFactory = async () => {
//   const {
//     NEO4J_URI,
//     NEO4J_USERNAME,
//     NEO4J_PASSWORD,
//   } = process.env;

//   console.log(process.env);

//   const driver = neo4j.driver(
//     NEO4J_URI,
//     neo4j.auth.basic(
//       NEO4J_USERNAME,
//       NEO4J_PASSWORD,
//     ),
//   );
//   const typedefPath = path.join(
//     process.cwd(),
//     'src/gql/schema.gql',
//   );
//   const typeDefs = fs
//     .readFileSync(typedefPath)
//     .toString();
//   const ogm = new OGM({
//     typeDefs,
//     driver,
//   });
//   ogm.init();
//   const User = ogm.model('User');
//   const schema = await neoSchema.getSchema();
//   await neoSchema.assertIndexesAndConstraints({
//     options: { create: true },
//   });

//   return {
//     playground: true,
//     schema,
//     plugins: [
//       ApolloServerPluginLandingPageLocalDefault(),
//     ],
//     context: ({ req }) => ({
//       token: req.headers.authorization,
//     }),
//   };
// };

// export const gqlProviderFactory = async () => {
//   const {
//     NEO4J_URI,
//     NEO4J_USERNAME,
//     NEO4J_PASSWORD,
//   } = process.env;

//   const driver = neo4j.driver(
//     NEO4J_URI,
//     neo4j.auth.basic(
//       NEO4J_USERNAME,
//       NEO4J_PASSWORD,
//     ),
//   );

//   const ogm = new OGM({
//     typeDefs,
//     driver,
//   });
//   ogm.init();
//   const User = ogm.model('User');
//   const gqlSchema = new Neo4jGraphQL({
//     typeDefs: typeDefs,
//     driver,
//     // resolvers,
//     // features: {
//     //   authorization: {
//     //     key: 'huakun',
//     //   },
//     // },
//   });
//   const schema = await gqlSchema.getSchema();
//   await gqlSchema.assertIndexesAndConstraints({
//     options: { create: true },
//   });

//   return {
//     playground: true,
//     schema,
//     context: ({ req }) => ({
//       token: req.headers.authorization,
//     }),
//   };
// };
