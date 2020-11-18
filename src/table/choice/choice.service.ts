import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from './choice.entity';


@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  findById(choice_id: number) {
    return this.choiceRepository.findOne({
      where: { choice_id },
    });
  }
}
