import { IsString, MinLength, IsEnum, IsNumber } from 'class-validator';
import { UserRole } from '../entities/shift-enum';


export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username: string;

  @IsNumber()
  @MinLength(4)
  password: number;

  @IsEnum(UserRole)
  role: UserRole;
}