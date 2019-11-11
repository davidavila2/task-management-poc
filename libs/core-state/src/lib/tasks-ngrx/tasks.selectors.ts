import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTask from './tasks.reducer';
import { emptyTask } from '@task-management-poc/core-data';

export const selectTaskState = createFeatureSelector<fromTask.TaskState>('task');

export const selectTaskId = createSelector(
  selectTaskState,
  fromTask.selectTaskIds
)

export const selectTaskEntites = createSelector(
  selectTaskState,
  fromTask.selectTaskEntities
)

export const selectAllTask = createSelector(
  selectTaskState,
  fromTask.selectAllTask
)

export const selectCurrentTaskId = createSelector(
  selectTaskState,
  fromTask.getSelectedTaskId
)

export const selectCurrentTask = createSelector(
  selectTaskEntites,
  selectCurrentTaskId,
  (taskEntities, taskId) => {
    return taskId ? taskEntities[taskId] : Object.assign({}, emptyTask)
  }
)

export const selectTaskLoadingStatus = createSelector(
  selectTaskState,
  state => state.isLoading
)