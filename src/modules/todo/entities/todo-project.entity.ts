import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todo_projects' })
export class TodoProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
