import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    return this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findOne(username: string): Promise<User | null> {
    const user = this.userModel.findOne({
      where: { username: username },
      raw: true,
    });
    return user;
  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    this.userModel.update(updateUserDto, { where: { username } });
    return this.findOne(username);
  }

  async remove(username: string) {
    const user = await this.userModel.findOne({ where: { username } });
    console.log(user);

    if (!user) {
      throw new Error('user not found');
    }
    this.userModel.destroy({ where: { username } });
    return 'deleted successfuly';
  }
}
