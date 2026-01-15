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

  async findAllByUser(userid: number) {
    const ass = await this.assignmentModel.findAll({ where: { userid: +userid } })
    console.log(ass);
    
    return this.assignmentModel.findAll({ where: { userid: userid } });
  }
}
