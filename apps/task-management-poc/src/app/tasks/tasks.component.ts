import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskService } from '@task-management-poc/core-data';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'task-management-poc-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  form: FormGroup;
  tasks$
  selectedTask: Task;

  constructor(private taskService: TaskService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getTask();
    this.initForm();
  }

  getTask() {
    this.tasks$ = this.taskService.all();
  }

  resetTask() {
    this.form.reset();
  }

  selectTask(task: Task) {
    console.log('selected', task);
    this.selectedTask = task;
    this.form.patchValue(task);
  }

  saveTask(): void {
    if (this.form.invalid) return;
    if (this.form.value.id) {
      console.log(this.form.value.id);
      this.taskService.update(this.form.value).subscribe(() => this.mutationsResponse());
    } else {
      this.taskService.create(this.form.value).subscribe(() => this.mutationsResponse());
    }
  }

  deleteTask(task: Task) {
    console.log('deleted from component', task);
    const confirmation = confirm(`Are you sure you want to delete ${task.title} ?`);

    if (confirmation) {
      this.taskService.delete(task.id).subscribe(() => this.mutationsResponse());
    }
  }

  cancel() {
    this.resetTask();
  }

  private mutationsResponse() {
    this.resetTask();
    this.getTask();
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

}
