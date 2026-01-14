import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';
import { Shift } from 'src/shifts/entities/shift.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'guards_db',
      });
      sequelize.addModels([User]);
      sequelize.addModels([Shift]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
