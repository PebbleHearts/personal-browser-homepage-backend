import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entitiy';
import { TodoProject } from './entities/todo-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoProject])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
