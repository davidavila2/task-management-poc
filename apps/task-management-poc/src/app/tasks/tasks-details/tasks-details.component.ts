import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Task } from '@task-management-poc/core-data';

@Component({
  selector: 'task-management-poc-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent {
  status: string[] = [
    'IN_PROGRESS',
    'OPEN',
    'DONE',
  ];

  currentTask: Task;
  originalTask: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() form: FormGroup;
  @Input() set tasks(value: Task) {
    if (value) this.originalTask = value.title;
    this.currentTask = Object.assign({}, value);
  }

  submitForm(formDirective: NgForm): void {
    this.saved.emit(this.form.value);
    formDirective.resetForm();
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
