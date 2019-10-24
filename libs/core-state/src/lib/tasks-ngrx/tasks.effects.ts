import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { TaskState } from './tasks.reducer';
import { TaskService, NotifyService, Task } from '@task-management-poc/core-data';
import { TaskActionTypes, LoadTask, TaskLoaded, AddTask, TaskAdded, UpdateTask, TaskUpdated, DeleteTask, TaskDeleted } from './tasks.actions';

@Injectable()
export class TaskEffects {
  @Effect()
  loadTask$ = this.dataPersistence.fetch(TaskActionTypes.LOAD_TASK, {
    run: (action: LoadTask, state: TaskState) => {
      return this.taskService.all().pipe(map((res: Task[]) => new TaskLoaded(res)))
    },
    onError: (action: LoadTask, error) => {
      this.notifyService.notify('Load Task Effects Error', error.message);
    }
  });

  @Effect()
  addTask$ = this.dataPersistence.pessimisticUpdate(TaskActionTypes.ADD_TASK, {
    run: (action: AddTask, state: TaskState) => {
      return this.taskService.create(action.payload).pipe(map((res: Task) => new TaskAdded(res)))
    },
    onError: (action: AddTask, error) => {
      this.notifyService.notify('Add Task Effects Error', error.message);
    }
  });

  @Effect()
  updateTask$ = this.dataPersistence.pessimisticUpdate(TaskActionTypes.UPDATE_TASK, {
    run: (action: UpdateTask, state: TaskState) => {
      return this.taskService.update(action.payload).pipe(map((res: Task) => new TaskUpdated(res)))
    },
    onError: (action: UpdateTask, error) => {
      this.notifyService.notify('Update Task Effects Error', error.message);
    }
  });

  @Effect()
  deleteTask$ = this.dataPersistence.pessimisticUpdate(TaskActionTypes.DELETE_TASK, {
    run: (action: DeleteTask, state: TaskState) => {
      return this.taskService.delete(action.payload.id).pipe(map((res: Task) => new TaskDeleted(res)))
    },
    onError: (action: DeleteTask, error) => {
      this.notifyService.notify('Delete Task Effects Error', error.message);
    }
  })


  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TaskState>,
    private taskService: TaskService,
    private notifyService: NotifyService
  ) {}
}