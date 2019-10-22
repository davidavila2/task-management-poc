import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '@task-management-poc/core-data';

@Component({
  selector: 'task-management-poc-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent {
  currentTask: Task;
  originalTask;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set tasks(value) {
    if (value) this.originalTask = value.title;
    this.currentTask = Object.assign({}, value)
  }
}
