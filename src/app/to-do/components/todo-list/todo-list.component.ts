import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
    `
    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box:last-child {
      border: none;
    }

    .listCont.cdk-drop-list-dragging .itemDrag:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class TodoListComponent {

  allJobList: Job[] = [];

  filterBtns: string[] = ['all','active','completed']
  selection = 'all';

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

  delete( event:Job ) {
    this.allJobList = this.allJobList.filter( job => job.description != event.description )
  }

  drop( event: CdkDragDrop<Job[]> ){
    moveItemInArray(this.allJobList, event.previousIndex, event.currentIndex);    
  }


}
