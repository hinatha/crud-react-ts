import { DeepReadonly } from 'utility-types'
// "|" means any types
// FYI: https://typescriptbook.jp/reference/values-types-variables/union
export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
  createdAt: Date
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

// Params is like below
// export type Params = {
//   title: string
//   description: string
//   status: Status
// };
// FYI: https://typescriptbook.jp/reference/type-reuse/utility-types/pick
export type Params = Pick<Todo, 'title' | 'description' | 'status'>

export interface TodoStore {
  // We should set TodoState as DeepReadOnly because of below reason
  // #region fields
  // If don't set as DeepReadOnly, we can change nesting value like below
  // In case of only readonly
  // state.todos = { title: 'test' } // TS2540: Cannot assign to 'todos' because it is a read-only property.
  // state.todos.title.todo1 = 'test' // In case of read-only property, we can change value
  // FYI: https://qiita.com/f96q/items/f4f8869de02963058092
  // #endregion
  state: DeepReadonly<TodoState>
  getTodo: (id: number) => void // Don't need to set return todo because of only making store in this time
  addTodo: (todo: Params) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}