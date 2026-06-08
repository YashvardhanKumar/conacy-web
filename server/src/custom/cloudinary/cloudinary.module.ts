import { Global, Module, OnModuleInit } from '@nestjs/common';
import { CloudinaryService } from '@custom/cloudinary/cloudinary.service';
import { ConfigurableModuleClass } from '@custom/cloudinary/cloudinary.module-definition';

@Global()
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
