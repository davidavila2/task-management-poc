export interface Task {
  id: number,
  description: string,
  title: string,
  status: string
}

export const emptyTask: Task = {
  id: null,
  title: '',
  status: '',
  description: '',
}
