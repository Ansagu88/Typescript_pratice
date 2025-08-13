import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, address: '123 Main St' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, address: '456 Elm St' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 28, address: '789 Oak St' }
    ];

    getAllUsers() {
        return this.users;
    }

}
