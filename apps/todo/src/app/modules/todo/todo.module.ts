import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoRoutingModule } from './todo.routing';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [CommonModule, TodoRoutingModule],
  exports: [],
  providers: [],
})
export class TodoModule {}
