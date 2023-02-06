import { Component } from '@angular/core';
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

  clear(){
    this.allJobList = this.allJobList.filter(job => !job.done)
  }

  get Jobs(){
    if(this.selection=='doned')
      return  this.allJobList.filter(job => job.done)
    
    if(this.selection == 'toDo')
      return  this.allJobList.filter(job => !job.done)

    return this.allJobList;
  }

  delete( event:Job ) {
    this.allJobList = this.allJobList.filter( job => job.description != event.description )
  }


}
