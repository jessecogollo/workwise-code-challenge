import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('varchar', { length: 255, nullable: true })
  author: string;

  @Column('varchar', { length: 2048, nullable: true })
  text: string;

  @Column({ type: 'date', nullable: true })
  published_at: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
