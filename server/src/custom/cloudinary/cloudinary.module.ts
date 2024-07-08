import { Module, OnModuleInit } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ConfigurableModuleClass } from './cloudinary.module-definition';

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule
  extends ConfigurableModuleClass
  implements OnModuleInit
{
  constructor(private readonly service: CloudinaryService) {
    super();
  }
  async onModuleInit() {
    this.service.pingCloudinary();
  }
}
