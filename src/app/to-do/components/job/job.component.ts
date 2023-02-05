import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styles: [
  ]
})
export class JobComponent {
  @Input() job! : Job | undefined;
  @Output() jobDone : EventEmitter<any> = new EventEmitter();

  doneJob(){
    this.jobDone.emit()
  }

  eliminar() {
    this.jobDone.emit(this.job);
  }

}
