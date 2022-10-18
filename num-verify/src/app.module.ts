import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { VerifyModule } from './verify/verify.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    VerifyModule,
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
