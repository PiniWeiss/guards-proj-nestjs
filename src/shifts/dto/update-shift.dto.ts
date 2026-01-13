import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-shift.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
