import { Test, TestingModule } from '@nestjs/testing';
import { OnrLoginController } from './onr-login.controller';
import { OnrLoginService } from './onr-login.service';

describe('OnrLoginController', () => {
  let controller: OnrLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnrLoginController],
      providers: [OnrLoginService],
    }).compile();

    controller = module.get<OnrLoginController>(OnrLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
