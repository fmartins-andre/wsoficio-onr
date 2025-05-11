import { Module } from '@nestjs/common';
import { OnrLoginService } from './onr-login.service';
import { OnrLoginController } from './onr-login.controller';
import { SoapModule } from 'nestjs-soap';
import { soapClientName, wsdlUrl } from './constants';

@Module({
  imports: [
    SoapModule.register({
      clientName: soapClientName,
      uri: wsdlUrl,
    }),
  ],
  controllers: [OnrLoginController],
  providers: [OnrLoginService],
})
export class OnrLoginModule {}
