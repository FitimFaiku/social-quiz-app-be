import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { HostQuiz } from '../host_quiz/host_quiz.entity';
import { Player } from '../player/player.entity';
import { Question } from '../question/question.entity';

@Entity('quiz', { orderBy: { id: 'ASC' } })
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Player, player => player.quize)
  @JoinColumn([ { name: 'created_from_playerid', referencedColumnName: 'id' }])
  created_from_player: Player;

  @OneToOne(type => Quiz)
  @JoinColumn([ { name: 'created_from_quizid', referencedColumnName: 'id' }])
  created_from_quiz: Quiz;

  @Column()
  quiz_title: string;

  @Column()
  quiz_description: string;

  @Column()
  is_active: boolean;

  @Column()
  is_private:boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => HostQuiz, hostQuize => hostQuize.quiz)
  hostQuize: HostQuiz[];

  @OneToMany(() => Question, questions => questions.quiz, {cascade : true})
  questions: Question[];

}
