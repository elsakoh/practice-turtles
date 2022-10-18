import { Controller, Get, Query } from '@nestjs/common';
import { VerifyService } from './verify.service';

@Controller('verify')
export class VerifyController {
  constructor(private readonly verifyService: VerifyService) {}
  @Get()
  async verify(@Query() query) {
    return this.verifyService.verifyPhoneNumber(query.number);
  }
}
