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
  @Output() delete : EventEmitter<Job> = new EventEmitter();

  eliminar() {
    this.delete.emit(this.job);
  }

}
