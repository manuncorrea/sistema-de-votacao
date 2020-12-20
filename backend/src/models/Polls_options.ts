import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Polls from './Polls';

@Entity('polls_options')
class CreateSuvery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  question_title: string;

  @Column('int')
  votes: string;

  @Column('time with time zone')
  date: Date;

  @ManyToOne(() => Polls, polls => polls.id)
  @JoinColumn({ name: 'polls_id'})
  poll: Polls;
}

export default CreateSuvery;
