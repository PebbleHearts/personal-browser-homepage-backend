import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;
}
