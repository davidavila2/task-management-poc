import { Action } from '@ngrx/store';
import { Task } from '@task-management-poc/core-data';

export enum TaskActionTypes {
  TASK_SELECTED = '[TASK] Task Selected',
  LOAD_TASK = '[TASK] Load Task',
  TASK_LOADED = '[TASK] Task Loaded',
  ADD_TASK = '[TASK] Add Task',
  TASK_ADDED = '[TASK] Task Added',
  UPDATE_TASK = '[TASK] Update Task',
  TASK_UPDATED = '[TASK] Task Updated',
  DELETE_TASK = '[TASK] Delete Task',
  TASK_DELETED = '[TASK] Task Deleted',
}

export class TaskSelected implements Action {
  readonly type = TaskActionTypes.TASK_SELECTED;
  constructor(public payload) {}
}

export class LoadTask implements Action {
  readonly type = TaskActionTypes.LOAD_TASK;
  constructor() {}
}

export class TaskLoaded implements Action {
  readonly type = TaskActionTypes.TASK_LOADED;
  constructor(public payload: Task[]) {}
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.ADD_TASK;
  constructor(public payload: Task) {}
}

export class TaskAdded implements Action {
  readonly type = TaskActionTypes.TASK_ADDED;
  constructor(public payload: Task) {}
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.UPDATE_TASK;
  constructor(public payload: Task) {}
}

export class TaskUpdated implements Action {
  readonly type = TaskActionTypes.TASK_UPDATED;
  constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
  readonly type = TaskActionTypes.DELETE_TASK;
  constructor(public payload: Task) {}
}

export class TaskDeleted implements Action {
  readonly type = TaskActionTypes.TASK_DELETED;
  constructor(public payload: Task) {}
}

export type TaskActions = TaskSelected
  | LoadTask
  | TaskLoaded
  | AddTask
  | TaskAdded
  | UpdateTask
  | TaskUpdated
  | DeleteTask
  | TaskDeleted
  ;