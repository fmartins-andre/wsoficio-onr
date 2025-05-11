import { Test, TestingModule } from '@nestjs/testing';
import { OnrLoginService } from './onr-login.service';

describe('OnrLoginService', () => {
  let service: OnrLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnrLoginService],
    }).compile();

    service = module.get<OnrLoginService>(OnrLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
