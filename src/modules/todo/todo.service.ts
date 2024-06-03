import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos(projectId: string): string {
    return `${projectId} `;
  }

  createTodo(): boolean {
    return true;
  }
}
