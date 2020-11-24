import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health.controller';


@Module({
  controllers: [HealthCheckController],
  imports: [TerminusModule],
  providers: [HealthCheckController]
})
export class HealthModule {}
