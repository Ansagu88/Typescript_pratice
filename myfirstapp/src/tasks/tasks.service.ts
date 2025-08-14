import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasksAll: any[] = [];

    getAllTasks() {
        // Logic to retrieve all tasks
       return this.tasksAll;
    }

    getQueryTasks(id: number) {
        // Logic to retrieve tasks based on query parameters
        const taskFound = this.tasksAll.filter(task => task.id === id);

        if (!taskFound) {
            return new NotFoundException(`Task with ID ${id} not found`);
        }
        return taskFound;
    }

    createTask(taskData: CreateTaskDto) {
        // Logic to create a new task
        console.log('Creating task with data:', taskData);
        this.tasksAll.push({
            ...taskData,
            id: this.tasksAll.length + 1,
            
    });
        return {
            message: "Process Complete",
            data: this.tasksAll

        };
    }

    updateTask(updateData: UpdateTaskDto) {
        // Logic to update an existing task
        const task = this.tasksAll.find(task => task.id === updateData.id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${updateData.id} not found`);
        }
        Object.assign(task, updateData);
        return {
            message: "Task updated successfully",
            data: task
        };
    }

    deleteTask() {
        // Logic to delete an existing task
        return {
            id: 1,
            title: 'Deleted Task 1',
            description: 'Deleted Description for Task 1',
        };
    }
}
