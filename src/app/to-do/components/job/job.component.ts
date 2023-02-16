import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../interfaces/job.interface';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styles: [
  ]
})
export class JobComponent {
  @Input() job! : Job;
  @Output() delete : EventEmitter<boolean> = new EventEmitter();

  eliminar() {
    // si emito true es para eliminar
    this.delete.emit(true);
  }

  changeState() {
    this.job.done = ! this.job.done
    // si emito false, es para actualizar el localstorage
    this.delete.emit(false);
  }

}
