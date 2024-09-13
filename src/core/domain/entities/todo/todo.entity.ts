export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodo {
  title: string;
  completed: boolean;
}

export interface UpdateTodo extends Partial<CreateTodo> {
  id?: string;
}
