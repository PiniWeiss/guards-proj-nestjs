import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { DatabaseModule } from 'src/db-provider/db.module';
import { shiftsProviders } from './entities/shift.providers';

@Module({
  controllers: [ShiftsController],
  imports: [DatabaseModule],
  providers: [ShiftsService, ...shiftsProviders],
  exports: [ShiftsService],
})
export class ShiftsModule {}
