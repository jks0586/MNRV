import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // private users: User[] = [];
  private idSeq = 0;
  create(createUserDto: CreateUserDto) {}

  findAll() {}

  findOne(id: number) {}

  update(id: number, updateUserDto: UpdateUserDto) {}

  remove(id: number) {}
}
