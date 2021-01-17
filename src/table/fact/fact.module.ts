import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Fact } from './fact.entity';
import { FactService } from './fact.service';


@Module({
  imports: [TypeOrmModule.forFeature([Fact])],
  providers: [FactService],
  exports: [FactService],
})
export class FactModule {}
