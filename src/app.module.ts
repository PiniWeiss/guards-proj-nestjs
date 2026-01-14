import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './db-provider/db.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ShiftsModule,
    AuthModule,
    AssignmentsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
