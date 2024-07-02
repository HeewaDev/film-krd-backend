import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @Column()
  company_id: number;
}
