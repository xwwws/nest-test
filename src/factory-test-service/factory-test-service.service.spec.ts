import { Test, TestingModule } from '@nestjs/testing';
import { FactoryTestServiceService } from './factory-test-service.service';

describe('FactoryTestServiceService', () => {
  let service: FactoryTestServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryTestServiceService],
    }).compile();

    service = module.get<FactoryTestServiceService>(FactoryTestServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
