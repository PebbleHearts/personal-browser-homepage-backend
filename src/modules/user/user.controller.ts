import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto): CreateUserDto {
    return this.userService.createUser(createUser);
  }

  @Post('login')
  login(@Body() loginDetails: LoginUserDto) {
    return this.userService.loginUser(loginDetails);
  }
}
