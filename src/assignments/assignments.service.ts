import { Inject, Injectable } from '@nestjs/common';
import { Assignment } from './entities/assignment.entity';
import { CreateAssignmentDto } from './dto/create-assignment.dto';

@Injectable()
export class AssignmentsService {
  constructor(
    @Inject('ASSIGNMENT_REPOSITORY')
    private assignmentModel: typeof Assignment,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentModel.create({ ...createAssignmentDto });
  }

  async findAllByUser(userId: number) {
    return this.assignmentModel.findAll({ where: { userId } });
  }
}
