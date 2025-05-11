import { Module } from '@nestjs/common';
import { OnrLoginModule } from './onr-login/onr-login.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '../../.env',
      load: [configuration],
    }),
    OnrLoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
