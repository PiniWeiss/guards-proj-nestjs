import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './db-provider/db.module';

@Module({
  imports: [UsersModule, DatabaseModule], 
})
export class AppModule {}
