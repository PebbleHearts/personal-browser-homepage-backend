import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { UnAutharizedException } from 'src/exceptions/unautharized.exception';
import { UserNotFoundException } from 'src/exceptions/userNotFound.exception';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  createUser(userDetails: CreateUserDto): CreateUserDto {
    const hashedPassword = bcrypt.hashSync(userDetails.password, 10);
    const newUser = new User();
    newUser.name = userDetails.name;
    newUser.email = userDetails.email;
    newUser.password = hashedPassword;
    this.userRepository.save(newUser);
    return userDetails;
  }

  async loginUser(loginDetails: LoginUserDto) {
    const user = await this.userRepository.findOneBy({
      email: loginDetails.email,
    });
    if (!user) {
      throw new UserNotFoundException();
    }

    const passwordMatch = await bcrypt.compare(
      loginDetails.password,
      user.password,
    );

    if (passwordMatch) {
      delete user.password;
      const jwtData = { email: user.email, userId: user.id };
      const accessToken = this.jwtService.sign(jwtData);

      return {
        ...user,
        accessToken,
      };
    } else {
      throw new UnAutharizedException();
    }
  }
}
