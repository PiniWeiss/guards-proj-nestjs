import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './entities/shift.entity';
import { CreateShiftDto } from './dto/create-shift.dto';
import { privateDecrypt } from 'crypto';
import { UpdateAuthDto } from 'src/auth/dto/update-auth.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { where } from 'sequelize';

// This should be a real class/interface representing a user entity

@Injectable()
export class ShiftsService {
  constructor(
    @Inject('SHIFTS_REPOSITORY')
    private shiftModel: typeof Shift,
  ) {}

  async createShift(createShiftDto: CreateShiftDto) {
    return this.shiftModel.create({ ...createShiftDto });
  }

  findAll() {
    return this.shiftModel.findAll();
  }

  async findOne(id: string): Promise<Shift | null> {
    const shift = this.shiftModel.findOne({ where: { id: +id } });
    return shift;
  }

  async update(id: string, updateShiftDto: UpdateShiftDto) {
    this.shiftModel.update(updateShiftDto, { where: { id: +id } });
   return this.findOne(id);
  }

  async remove(id: string) {
    const shift = await this.shiftModel.findOne({where: {id: +id}})
    console.log( shift);
    
    if(!shift) {
      throw new Error("user not found")
    }
    this.shiftModel.destroy({where: {id: +id}})
    return "deleted successfuly"
  }
}
