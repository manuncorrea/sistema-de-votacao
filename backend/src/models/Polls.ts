import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('polls')
class Polls {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  poll_name: string;

  @Column('time with time zone')
  start_date: Date;

  @Column('time with time zone')
  end_date: Date;

  @Column()
  status: boolean;

  @Column('time with time zone')
  created_at: Date;

  @Column('time with time zone')
  updated_at: Date;

}

export default Polls;