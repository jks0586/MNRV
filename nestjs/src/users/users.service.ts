import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}
  async insertUser(
    userName: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
  ) {
    const username = userName.toLowerCase();
    const newUser = new this.userModel({
      username,
      email,
      first_name,
      last_name,
      password,
    });
    await newUser.save();
    return newUser;
  }
  async getUser(userName: string) {
    const username = userName.toLowerCase();
    const user = await this.userModel.findOne({ username });
    return user;
  }
}
