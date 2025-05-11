import { Inject, Injectable } from '@nestjs/common';
import { Login_WSReq, Login_WSResp, OnrLoginClient } from './onr-login.types';
import { soapClientName } from './constants';

@Injectable()
export class OnrLoginService {
  @Inject(soapClientName) private readonly onrLoginClient: OnrLoginClient;

  async login(payload: Login_WSReq): Promise<Login_WSResp | undefined> {
    const [response] = await this.onrLoginClient.LoginUsuarioCertificadoAsync({
      oRequest: payload,
    });

    return response?.LoginUsuarioCertificadoResult;
  }
}
