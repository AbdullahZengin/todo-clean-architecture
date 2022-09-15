import { FilterTodosByStatusPipe } from './pipes/filter-todos-by-status.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo.routing';

import { FilterTodosByBodyPipe } from './pipes/filter-todos-by-body.pipe';

import { TodoPageComponent } from './components/todo-page/todo-page.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    FilterTodosByBodyPipe,
    FilterTodosByStatusPipe,
  ],
  imports: [CommonModule, TodoRoutingModule, FormsModule],
  exports: [],
  providers: [FilterTodosByBodyPipe, FilterTodosByStatusPipe],
})
export class TodoModule {}
