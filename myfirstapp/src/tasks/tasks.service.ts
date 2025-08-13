import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    getAllTasks() {
        // Logic to retrieve all tasks
        return [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description for Task 1',
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description for Task 2',
            },
        ];
    }

    createTask() {
        // Logic to create a new task
        return {
            id: 3,
            title: 'Task 3',
            description: 'Description for Task 3',
        };
    }
}
