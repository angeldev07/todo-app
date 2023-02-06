import { Component } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent {

  allJobList: Job[] = [{
    description: 'Complete online JavaScript course',
    done: false
  }];

  filterBtns: string[] = ['all','active','completed']
  selection = 'all';

  addJob( job: Job ){
    this.allJobList.push(job)
  }

  changeToShow(value: string){
    this.selection = value
    console.log(this.selection);
    
  }

  clear(){
    this.allJobList = this.allJobList.filter(job => !job.done)
  }

  get Jobs(){
    if(this.selection=='completed')
      return  this.allJobList.filter(job => job.done)
    
    if(this.selection == 'active')
      return  this.allJobList.filter(job => !job.done)

    return this.allJobList;
  }

  get itemsLeft ( ) {
    return `${this.allJobList.filter(({done}) => !done).length} items left`
  }

  delete( event:Job ) {
    this.allJobList = this.allJobList.filter( job => job.description != event.description )
  }


}
