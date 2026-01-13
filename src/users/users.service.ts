import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { privateDecrypt } from 'crypto';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { where } from 'sequelize';


// This should be a real class/interface representing a user entity


@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userModel.create({...createUserDto})
  }
  
  findAll() {
    return this.userModel.findAll()
  }

  async findOne(username: string): Promise<User| null> {
    const user =  this.userModel.findOne({where: {username: username}})
    if(!user) {
      throw new Error("user not found")
    }
    return user
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, {where: {username: username}})
  }

//   delete(username: string) {
//     const isExists =  this.userModel.destroy({where: {username: username}})
//     if(isExists === 1) {
// return "deleted successfuly"
//     }
  // }
}