import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fact } from './fact.entity';


@Injectable()
export class FactService {
  constructor(
    @InjectRepository(Fact)
    private readonly choiceRepository: Repository<Fact>,
  ) {}

}
