import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoProject } from './entities/todo-project.entity';
import { CreateTodoProjectDto } from './dto/create-todo-project.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    @InjectRepository(TodoProject)
    private todoProjectRepository: Repository<TodoProject>,
  ) {}

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoRepository.find();
    return todos;
  }

  createTodo(todoDetails: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = todoDetails.title;
    todo.description = todoDetails.description;
    return this.todoRepository.save(todo);
  }

  async getTodosProjects(): Promise<TodoProject[]> {
    const todoProjects = await this.todoProjectRepository.find();
    return todoProjects;
  }

  createTodoProject(
    todoProjectDetails: CreateTodoProjectDto,
  ): Promise<TodoProject> {
    const todoProject = new TodoProject();
    todoProject.title = todoProjectDetails.title;
    return this.todoProjectRepository.save(todoProject);
  }
}
