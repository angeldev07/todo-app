import { Component, EventEmitter, Output } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-input-job',
  templateUrl: './input-job.component.html',
  styles: [
  ]
})
export class InputJobComponent {

  @Output() jobToDo: EventEmitter<Job> = new EventEmitter<Job>();;
  value = ''

  saveJob() {
    if(this.value.trim().length === 0)
      return
    
    this.jobToDo.emit({description: this.value, done: false})
    this.value = ''
  }

}
