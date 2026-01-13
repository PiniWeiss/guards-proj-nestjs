import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UserRole } from './shift-enum';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column
  username: string;

  @Column
  password: string

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.SOLDIER,
  })
  role: UserRole;
}