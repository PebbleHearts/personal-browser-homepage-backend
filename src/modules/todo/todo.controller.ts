import { Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':projectId')
  getTodos(@Param('projectId') projectId: string): string {
    return this.todoService.getTodos(projectId);
  }

  @Post()
  createTodo(): boolean {
    return this.todoService.createTodo();
  }
}
