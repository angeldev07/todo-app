import { Component, ElementRef, ViewChild } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent {

  allJobList: Job[] = [];
  selection = 'all';

  addJob( job: Job ){
    this.allJobList.push(job)
  }

  changeToShow(value: string){
    this.selection = value
  }

  update(event: any){
    if(!event){
      return
    }
    const indexToDelete = this.allJobList.findIndex(({description})=> description === event.description )
    this.allJobList = this.allJobList.filter((job,index) => index != indexToDelete)
  }

  clear(){
    this.allJobList = this.allJobList.filter(job => !job.done)
  }

  get leftItems(){
    return `${this.toDo.length} left Items`
  }

  get toDo(){
    return this.allJobList.filter(job => !job.done)
  }

  get done(){
    return this.allJobList.filter(job => job.done)
  }
}
