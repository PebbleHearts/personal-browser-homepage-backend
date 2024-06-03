import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTodos(projectId: string): string {
    return `Hello World! ${projectId}`;
  }

  createTodo(): boolean {
    return true;
  }
}
