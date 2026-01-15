import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async hashPassword(password: string): Promise<string> {
    console.log('Value to hash:', password);
  console.log('Type of value:', typeof password);
    try {
      const saltRounds = 10;
      return await bcrypt.hash(password, saltRounds);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error during password encryption',
      );
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    
    const hashedPassword = await this.hashPassword(createUserDto.password);
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
