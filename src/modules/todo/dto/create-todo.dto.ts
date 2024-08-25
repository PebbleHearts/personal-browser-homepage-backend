import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly projectId: number;
}
