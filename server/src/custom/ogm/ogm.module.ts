import { DynamicModule, Module } from '@nestjs/common';
import { OgmService } from './ogm.service';
import { OGMConstructor } from '@neo4j/graphql-ogm/dist/classes/OGM';
import { ConfigurableModuleClass } from './ogm.module-definition';

@Module({
  providers: [OgmService],
  exports: [OgmService],
})
export class OgmModule extends ConfigurableModuleClass {
}
