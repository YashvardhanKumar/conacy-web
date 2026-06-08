import { Test, TestingModule } from '@nestjs/testing';
import { OgmService } from '@custom/ogm/ogm.service';
import { MODULE_OPTIONS_TOKEN } from '@custom/ogm/ogm.module-definition';
import { ConfigService } from '@nestjs/config';

jest.mock('neo4j-driver', () => ({
  auth: {
    basic: jest.fn(),
  },
  driver: jest.fn().mockReturnValue({
    close: jest.fn(),
  }),
}));

jest.mock('@neo4j/graphql-ogm', () => {
  return {
    OGM: jest.fn().mockImplementation(() => {
      return {
        init: jest.fn(),
        model: jest.fn(),
      };
    }),
  };
});

describe('OgmService', () => {
  let service: OgmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OgmService,
        {
          provide: MODULE_OPTIONS_TOKEN,
          useValue: {
            typeDefs: '',
            neo4jUrl: 'bolt://localhost:7687',
            neo4jUsername: 'neo4j',
            neo4jPassword: 'password',
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test'),
          },
        },
      ],
    }).compile();

    service = module.get<OgmService>(OgmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
