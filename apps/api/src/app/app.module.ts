import { AuthModule } from './api/auth/auth.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './api/todo/todo.module';
import { UsecaseProvidersModule } from './di/usecase-providers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/todo-workshop?authSource=admin'),
    // MongooseModule.forRoot('mongodb://localhost:27017/todo-workshop'),
    UsecaseProvidersModule.forRoot(),
    TodoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
