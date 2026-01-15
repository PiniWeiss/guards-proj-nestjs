import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createAssignmentDto: any) {
    return this.assignmentsService.create(createAssignmentDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  getAssignmentByUser(@Param('id') id: string) {
    return this.assignmentsService.findAllByUser(+id);
  }
}
