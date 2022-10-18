import { Module } from '@nestjs/common';
import { CheckedNumber } from './entities/checked-number.entity';
import { VerifyController } from './verify.controller';
import { VerifyService } from './verify.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CheckedNumber])],
  controllers: [VerifyController],
  providers: [VerifyService],
})
export class VerifyModule {}
