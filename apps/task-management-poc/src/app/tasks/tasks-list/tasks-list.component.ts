import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '@task-management-poc/core-data';

@Component({
  selector: 'task-management-poc-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[];
  @Input() readonly = false;
  @Input() loading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  delete(task: Task, event: any): void {
    event.stopImmediatePropagation();
    this.deleted.emit(task);
  }

  select(task: Task): void {
    this.selected.emit(task)
  }

}
