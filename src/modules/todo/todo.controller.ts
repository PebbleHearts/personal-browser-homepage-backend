import { Body, Controller, Get, Post, UseGuards, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entitiy';
import { CreateTodoProjectDto } from './dto/create-todo-project.dto';
import { TodoProject } from './entities/todo-project.entity';
import { JwtAuthGuard } from '../user/jwt-guard';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Get('project/:projectId')
  getProjectTodos(@Param('projectId') projectId: number): Promise<Todo[]> {
    return this.todoService.getProjectTodos(projectId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('projects')
  getTodoProjects(): Promise<TodoProject[]> {
    return this.todoService.getTodosProjects();
  }

  @UseGuards(JwtAuthGuard)
  @Post('projects')
  createTodoProject(
    @Body() createTodoProjectDto: CreateTodoProjectDto,
  ): Promise<TodoProject> {
    return this.todoService.createTodoProject(createTodoProjectDto);
  }
}
