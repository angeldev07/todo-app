import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job/job.component';
import { InputJobComponent } from './components/input-job/input-job.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    JobComponent,
    InputJobComponent,
    TodoListComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ToDoModule { }
