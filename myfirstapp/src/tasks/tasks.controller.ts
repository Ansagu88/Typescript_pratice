import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/all')
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post('/new')
    createTask() {
        return this.tasksService.createTask();
    }
}