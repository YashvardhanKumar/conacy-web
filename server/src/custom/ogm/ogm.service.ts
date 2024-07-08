import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IOGM, MODULE_OPTIONS_TOKEN } from './ogm.module-definition';
import { Model, OGM } from '@neo4j/graphql-ogm';
import { auth, driver } from 'neo4j-driver';

@Injectable()
export class OgmService {
  private ogm: OGM;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: IOGM,
    private readonly config: ConfigService,
  ) {
    this.ogm = new OGM({
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
  model(name: string): Model {
    return this.ogm.model(name);
  }
}
