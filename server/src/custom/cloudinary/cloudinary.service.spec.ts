import { Test, TestingModule } from '@nestjs/testing';
import { CloudinaryService } from '@custom/cloudinary/cloudinary.service';
import { MODULE_OPTIONS_TOKEN } from '@custom/cloudinary/cloudinary.module-definition';

describe('CloudinaryService', () => {
  let service: CloudinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CloudinaryService,
        {
          provide: MODULE_OPTIONS_TOKEN,
          useValue: {
            cloud_name: 'test',
            api_key: 'test',
            api_secret: 'test',
          },
        },
      ],
    }).compile();

    service = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
