import { IsString, MinLength, IsEnum,  IsNotEmpty } from 'class-validator';
import { UserRole } from '../entities/user-enum';


export class CreateUserDto {
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3)
  username: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password is too short (minimum 6 characters)' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}