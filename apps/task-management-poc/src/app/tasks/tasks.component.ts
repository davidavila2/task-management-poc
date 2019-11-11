import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, NotifyService } from '@task-management-poc/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskFacade } from '@task-management-poc/core-state';

@Component({
  selector: 'task-management-poc-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  form: FormGroup;
  tasks$: Observable<Task[]> = this.taskFacade.task$;
  currentTask$: Observable<Task> = this.taskFacade.currentTask$;
  isLoading$: Observable<boolean> = this.taskFacade.isTaskLoading$;

  constructor(
    private taskFacade: TaskFacade,
    private notifyService: NotifyService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.taskFacade.loadTask();
    this.taskFacade.mutations$.subscribe(() => this.resetTask());
  }

  resetTask(): void {
    this.form.reset();
    this.selectTask({ id: null } as Task)
  }

  selectTask(task: Task): void {
    this.taskFacade.selectTask(task.id);
    this.form.patchValue(task);
  }

  saveTask(task: Task): void {
    if (this.form.invalid) return;
    task.id ?
      this.taskFacade.updateTask(this.form.value) :
      this.taskFacade.createTask(this.form.value);
  }

  deleteTask(task: Task): void {
    const confirmation = confirm(`Are you sure you want to delete ${task.id} ?`);

    if (confirmation) {
      this.taskFacade.deleteTask(task)
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    });
  }

}
