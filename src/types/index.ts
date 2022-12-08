import { Dispatch, SetStateAction } from "react";

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

// Params is like below
// export type Params = {
//   title: string
//   description: string
//   status: Status
// };
// FYI: https://typescriptbook.jp/reference/type-reuse/utility-types/pick
export type Params = Pick<Todo, 'title' | 'description' | 'status'>

// This is type of TodosState
// Dispatch means below
// type Dispatch<A> = (value: A) => void;
// FYI: http://www.code-magagine.com/?p=13261
export interface TodosState {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};
