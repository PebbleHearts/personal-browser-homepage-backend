import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TodoProject } from './todo-project.entity';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // Each Todo belongs to a single TodoProject
  @ManyToOne(() => TodoProject, {
    onDelete: 'CASCADE',
  })
  project: TodoProject;
}
