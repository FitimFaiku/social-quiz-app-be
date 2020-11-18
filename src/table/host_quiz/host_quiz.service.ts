import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HostQuiz } from './host_quiz.entity';

@Injectable()
export class HostQuizService {
  constructor(
    @InjectRepository(HostQuiz)
    private readonly hostQuizServiceRepository: Repository<HostQuiz>,
  ) {}

  findById(host_quiz_id: number) {
    return this.hostQuizServiceRepository.findOne({
      where: { host_quiz_id },
    });
  }
}
