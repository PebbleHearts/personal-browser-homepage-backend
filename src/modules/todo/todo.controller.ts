import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entitiy';
import { CreateTodoProjectDto } from './dto/create-todo-project.dto';
import { TodoProject } from './entities/todo-project.entity';
import { JwtAuthGuard } from '../user/jwt-guard';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @Get('projects')
  getTodoProjects(): Promise<TodoProject[]> {
    return this.todoService.getTodosProjects();
  }

  @Post('projects')
  createTodoProject(
    @Body() createTodoProjectDto: CreateTodoProjectDto,
  ): Promise<TodoProject> {
    return this.todoService.createTodoProject(createTodoProjectDto);
  }
}
