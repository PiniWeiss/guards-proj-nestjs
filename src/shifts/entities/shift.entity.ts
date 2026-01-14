import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { User } from 'src/users/entities/user.entity';

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
  endTime: string;

  @Column
  location: string;
  @BelongsToMany(() => User,{through: () => Assignment})
  users: User[]; // מאפשר למפקד לראות מי משובץ לכל שמירה [cite: 84]
}
