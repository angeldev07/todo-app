import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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
export class TodoListComponent implements OnInit{
  
  allJobList: Job[] = [];
  filterBtns: string[] = ['all','active','completed']
  selection = 'all';
  
  ngOnInit(): void {
    // Comprobamos si hay algo en el localStorage para cargarlo
    if(localStorage.getItem('jobs'))
      this.allJobList = JSON.parse(localStorage.getItem('jobs')!);
    
    if(localStorage.getItem('filter')){
      this.selection = localStorage.getItem('filter')!;

    }
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

  addJob( job: Job ){
    // Agregamos el trabajo a la lista
    this.allJobList.push(job)
    // agregamos al localStorage por si se recarga la lista 
    localStorage.setItem('jobs', JSON.stringify(this.allJobList))
  }

  changeToShow(value: string){
    this.selection = value
    localStorage.setItem('filter', this.selection)
  }

  clear(){
    this.allJobList = this.allJobList.filter(job => !job.done)
    localStorage.setItem('jobs', JSON.stringify(this.allJobList))
  }

  delete( index: number  ) {
    if(index >= 0 )
      this.allJobList.splice(index,1);
    localStorage.setItem('jobs',JSON.stringify(this.allJobList))
  }

  drop( event: CdkDragDrop<Job[]> ){
    moveItemInArray(this.allJobList, event.previousIndex, event.currentIndex);    
  }


}
