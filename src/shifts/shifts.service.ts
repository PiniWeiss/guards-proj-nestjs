import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/shift.entity';
import { CreateUserDto } from './dto/create-shift.dto';
import { privateDecrypt } from 'crypto';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { UpdateUserDto } from './dto/update-shift.dto';
import { where } from 'sequelize';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userModel.create({ ...createUserDto });
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findOne(username: string): Promise<User | null> {
    const user = this.userModel.findOne({ where: { username: username } });
    return user;
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    this.userModel.update(updateUserDto, { where: { username } });
   return this.findOne(username);
  }

  async remove(username: string) {
    const user = await this.userModel.findOne({where: {username}})
    console.log( user);
    
    if(!user) {
      throw new Error("user not found")
    }
    this.userModel.destroy({where: {username}})
    return "deleted successfuly"
  }
}
