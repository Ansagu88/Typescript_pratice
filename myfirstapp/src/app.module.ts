import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, AuthModule, ProjectModule, TasksModule, HelloModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
