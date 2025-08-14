import { Controller, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/all')
    getAllTasks(@Query() query: any) {
        console.log('Query parameters:', query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getQueryTasks(@Param('id') id: string) {
        console.log(id);
        return this.tasksService.getQueryTasks(parseInt(id));
    }

    @Post('/new')
    createTask(@Body() taskData: CreateTaskDto) {
        return this.tasksService.createTask(taskData);
        
    }

    @Put('/update')
    updateTask(@Body() updateData: UpdateTaskDto) {
        return this.tasksService.updateTask(updateData);
    }

    @Delete('/delete')
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}