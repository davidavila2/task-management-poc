import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from '@task-management-poc/core-data';
import { TaskActions, TaskActionTypes } from './tasks.actions';

export interface TaskState extends EntityState<Task> {
  selectedTaskId: number | null;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();
export const initialState: TaskState = adapter.getInitialState({
  selectedTaskId: null,
  isLoading: false
})

export function TaskReducer(state = initialState, action: TaskActions) {
  switch (action.type) {
    case TaskActionTypes.TASK_SELECTED: {
      return Object.assign({}, state, { selectedTaskId: action.payload })
    }
    case TaskActionTypes.LOAD_TASK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case TaskActionTypes.TASK_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case TaskActionTypes.ADD_TASK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case TaskActionTypes.TASK_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case TaskActionTypes.UPDATE_TASK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case TaskActionTypes.TASK_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case TaskActionTypes.DELETE_TASK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case TaskActionTypes.TASK_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedTaskId = (state: TaskState) => state.selectedTaskId;
export const {
  selectIds: selectTaskIds,
  selectEntities: selectTaskEntities,
  selectAll: selectAllTask,
  selectTotal: selectTaskTotal
} = adapter.getSelectors();