export interface Todo {
  id: number,
  text: string,
  isActive: boolean,
}

export interface List {
  id: number,
  title: string,
  todos: Todo[],
}