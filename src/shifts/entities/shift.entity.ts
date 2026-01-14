import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table
export class Shift extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column
  startTime: string;

  @Column
  endTime: string

  @Column
  location: string
}