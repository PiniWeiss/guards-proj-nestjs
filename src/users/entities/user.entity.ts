import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { UserRole } from './user-enum';
import { Shift } from 'src/shifts/entities/shift.entity';
import { Assignment } from 'src/assignments/entities/assignment.entity';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column
  declare username: string;

  @Column
  declare password: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.SOLDIER,
  })
  declare role: UserRole;
  @BelongsToMany(() => Shift, { through: () => Assignment })
  shifts: Shift[];
}
