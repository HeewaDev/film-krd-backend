import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmCrew {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column()
  crew_id: number;
}
