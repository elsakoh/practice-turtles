import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { validate } from './config.validate';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [NestConfigModule.forRoot({ validate })],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
