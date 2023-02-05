import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job/job.component';
import { InputJobComponent } from './components/input-job/input-job.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    JobComponent,
    InputJobComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
