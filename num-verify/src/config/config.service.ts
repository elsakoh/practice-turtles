import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

import { NumVerifyConfig } from './config.interface';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get numVerifyConfig(): NumVerifyConfig {
    return {
      url: this.configService.get('NUMVERIFY_BASE_URL'),
      apiKey: this.configService.get('NUMVERIFY_API_KEY'),
    };
  }
}
