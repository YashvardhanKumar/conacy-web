import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IOGM, MODULE_OPTIONS_TOKEN } from './ogm.module-definition';
import { Model, OGM } from '@neo4j/graphql-ogm';
import { auth, driver } from 'neo4j-driver';
import { ModelMap } from './ogm-types';

@Injectable()
export class OgmService {
  ogm: OGM<ModelMap>;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: IOGM,
    private readonly config: ConfigService,
  ) {
    this.ogm = new OGM<ModelMap>({
      typeDefs: options.typeDefs,
      debug: options.debug,
      resolvers: options.resolvers,
      driver: driver(
        options.neo4jUrl,
        auth.basic(options.neo4jUsername, options.neo4jPassword),
      ),
    });
  }

  async init(): Promise<void> {
    await this.ogm.init();
    console.log('OGM init');
  }
}
