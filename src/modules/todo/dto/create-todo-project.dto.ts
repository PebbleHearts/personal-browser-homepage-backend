import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
}
