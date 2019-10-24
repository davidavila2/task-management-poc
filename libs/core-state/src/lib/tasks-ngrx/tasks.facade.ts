import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as TaskAction from './tasks.actions';
import { TaskActionTypes } from './tasks.actions';
import { selectAllTask, selectCurrentTask, selectTaskLoadingStatus } from './tasks.selectors';
import { TaskState } from './tasks.reducer';
import { Task } from '@task-management-poc/core-data';


@Injectable({ providedIn: 'root' })
export class TaskFacade {
  task$ = this.store.pipe(select(selectAllTask));
  currentTask$ = this.store.pipe(select(selectCurrentTask));
  isTaskLoading$ = this.store.pipe(select(selectTaskLoadingStatus))

  mutations$ = this.actions$
    .pipe(
      filter(action => 
        action.type === TaskActionTypes.TASK_ADDED
        || action.type === TaskActionTypes.TASK_UPDATED
        || action.type === TaskActionTypes.TASK_DELETED
    )
  )

  constructor(private store: Store<TaskState>, private actions$: ActionsSubject) { }
  
  selectTask(taskId) {
    this.store.dispatch(new TaskAction.TaskSelected(taskId));
  }

  loadTask() {
    this.store.dispatch(new TaskAction.LoadTask());
  }

  createTask(task: Task) {
    this.store.dispatch(new TaskAction.AddTask(task));
  }

  updateTask(task: Task) {
    this.store.dispatch(new TaskAction.UpdateTask(task));
  }

  deleteTask(task: Task) {
    this.store.dispatch(new TaskAction.DeleteTask(task));
  }
}