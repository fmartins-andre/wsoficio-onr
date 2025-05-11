import { Body, Controller, Post } from '@nestjs/common';
import { OnrLoginService } from './onr-login.service';
import { Login_WSReq, Login_WSResp } from './onr-login.types';

@Controller('onr-login')
export class OnrLoginController {
  constructor(private readonly onrLoginService: OnrLoginService) {}

  @Post()
  async login(@Body() payload: Login_WSReq): Promise<Login_WSResp | undefined> {
    return await this.onrLoginService.login(payload);
  }
}
