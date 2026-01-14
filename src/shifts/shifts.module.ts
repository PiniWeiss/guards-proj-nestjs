import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { DatabaseModule } from 'src/db-provider/db.module';
import { shiftProviders } from './entities/shift.providers';

@Module({
  controllers: [ShiftsController],
  imports: [DatabaseModule],
  providers: [ShiftsService, ...shiftProviders],
  exports: [ShiftsService],
})
export class ShiftsModule {}
