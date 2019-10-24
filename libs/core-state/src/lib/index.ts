import { ActionReducerMap } from '@ngrx/store';

import * as fromTask from './tasks-ngrx/tasks.reducer';

export interface AppState {
  task: fromTask.TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  task: fromTask.TaskReducer
}

export const defaultState: AppState = {
  task: { ids: [] } as fromTask.TaskState
}