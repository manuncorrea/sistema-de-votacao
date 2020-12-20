import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default CreateSuvery;
