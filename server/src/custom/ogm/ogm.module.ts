import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import { OgmService } from './ogm.service';
import { OGMConstructor } from '@neo4j/graphql-ogm/dist/classes/OGM';
import { ConfigurableModuleClass } from './ogm.module-definition';
import * as path from 'node:path';
import { generate } from '@neo4j/graphql-ogm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [OgmService],
  exports: [OgmService],
})
export class OgmModule extends ConfigurableModuleClass implements OnModuleInit {
  constructor(private readonly service: OgmService, private readonly configService: ConfigService) {
    super();
  }
  async onModuleInit() {
    if (this.configService.get("GENERATE")) {
      console.log(process.cwd());

      const outFile = path.join(process.cwd(), 'src/custom/ogm', "ogm-types.ts");

      await generate({
        ogm: this.service.ogm,
        outFile,
      });

      console.log("Types Generated");

      process.exit(0);
    }
    await this.service.init();
  }
}
