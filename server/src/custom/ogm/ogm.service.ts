import OGM, { OGMConstructor } from '@neo4j/graphql-ogm/dist/classes/OGM';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MODULE_OPTIONS_TOKEN } from './ogm.module-definition';
import { Model } from '@neo4j/graphql-ogm';

@Injectable()
export class OgmService {
    private ogm: OGM;
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: {ogm: OGM},
    private readonly config: ConfigService,
  ) {
    this.ogm = options.ogm;
  }
  
  async init(): Promise<void> {
    await this.ogm.init();
    console.log('init');
    
  }
  model(name: string): Model {
    return this.ogm.model(name);
  }
}
