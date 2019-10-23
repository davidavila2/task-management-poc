import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskService } from '@task-management-poc/core-data';

@Component({
  selector: 'task-management-poc-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // this.getTask()
  }

  resetTask() {
    const emptyTask: Task = {
      id: null,
      title: '',
      description: '',
    }
    this.selectTask(emptyTask);
  }

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  getTask() {
    this.tasks$ = this.taskService.all();
  }

  saveTask(task: Task) {
    if (!task.id) {
      this.createTask(task);
    } else {
      this.updateTask(task);
    }
  }

  updateTask(task: Task) {
    this.taskService.update(task).subscribe(() => {
      this.getTask();
      this.resetTask();
    })
  }

  createTask(task: Task) {
    this.taskService.create(task).subscribe(() => {
      this.getTask();
      this.resetTask();
    })
  }

  deleteTask(task: Task) {
    this.taskService.delete(task).subscribe(() => {
      this.getTask();
    })
  }

  cancel() {
    this.resetTask();
  }

}
