import { Module } from '@nestjs/common';
import { UsersService } from './shifts.service';
import { UsersController } from './shifts.controller';
import { DatabaseModule } from 'src/db-provider/db.module';
import { usersProviders } from './entities/shift.providers';

@Module({
  controllers: [UsersController],
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
