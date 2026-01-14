import { IsString } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  startTime: string;
  @IsString()
  endTime: string;
  @IsString()
  location: string;
}
