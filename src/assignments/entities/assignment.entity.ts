import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Shift } from 'src/shifts/entities/shift.entity';
import { User } from 'src/users/entities/user.entity';


@Table
export class Assignment extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;
  @Column
  @ForeignKey(() => User) 
   userid: number;
  
  @Column
  @ForeignKey(() => Shift)
   shiftid: number;

}