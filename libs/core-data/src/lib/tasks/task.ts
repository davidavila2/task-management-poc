export interface Task {
  id: number,
  description: string,
  title: string,
  // status: TaskStatus
}

export const emptyTask: Task = {
  id: null,
  title: '',
  description: '',
}
