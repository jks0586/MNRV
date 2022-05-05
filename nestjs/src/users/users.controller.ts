import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //post / signup
  @Post('/signup')
  async addUser(
    @Body('password') userPassword: string,
    @Body('email') email: string,
    @Body('username') userName: string,
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.insertUser(userName,email,hashedPassword,first_name,last_name);
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username,
    };
  }
}
