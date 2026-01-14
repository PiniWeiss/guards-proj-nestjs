import { Module } from '@nestjs/common';

import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { DatabaseModule } from 'src/db-provider/db.module';
import { assignmentProviders } from './entities/assignment.providers';

@Module({
  imports: [DatabaseModule],
  providers: [AssignmentsService, ...assignmentProviders],
  controllers: [AssignmentsController],
  exports: [AssignmentsService],
})
export class AssignmentsModule {}
