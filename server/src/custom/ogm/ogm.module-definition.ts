import OGM from '@neo4j/graphql-ogm/dist/classes/OGM';
import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DocumentNode } from 'graphql';
import { typeDefs } from 'src/gql/type-defs';

export interface IOGM {
  typeDefs: string | DocumentNode | DocumentNode[];
  debug?: boolean;
  neo4jUrl: string;
  neo4jUsername: string;
  neo4jPassword: string;
  resolvers?: any;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IOGM>({ moduleName: 'OgmModule' })
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .build();
