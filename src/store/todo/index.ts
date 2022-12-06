import { useState } from "react";
import { Todo, TodoStore, Params } from './types';

// It's mock
const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    description: '1つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-01'),
    updatedAt: new Date('2020-12-01'),
  },
  {
    id: 2,
    title: 'todo2',
    description: '2つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-02'),
    updatedAt: new Date('2020-12-02'),
  },
  {
    id: 3,
    title: 'todo3',
    description: '3つ目',
    status: 'working',
    createdAt: new Date('2020-12-03'),
    updatedAt: new Date('2020-12-04'),
  },
]

// Set useState and first value is mockTodo
const [state, setState] = useState<Todo[]>(mockTodo);

// Change from Params to Todo
const intitializeTodo = (todo: Params) => {
    const date = new Date()
    return {
      id: date.getTime(),
      title: todo.title,
      description: todo.description,
      status: todo.status,
      createdAt: date,
      updatedAt: date,
    } as Todo
  }

// Get Todo by id 
const getTodo = (id: number) => {
  const todo = state.find((todo: Todo) => todo.id === id)
  // In case of not existing todo
  if (!todo) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  return todo
}

// Add Todo
const addTodo = (todo: Params) => {
    setState([...state, intitializeTodo(todo)]);
}

// Update Todo by id
const updateTodo = (id: number, newTodo: Todo) => {
    // findIndex method returns the position of id
    // If todo.id didn't match id, findIndex returns -1
    const index = state.findIndex((todo: Todo) => todo.id === id)
    if (index === -1) {
        throw new Error(`cannot find todo by id:${id}`)
    }
    // Update Todo by index of list
    setState(state.map((originalTodo, index) => (index === id ? originalTodo : newTodo)))
}

// Delete by id
const deleteTodo = (id: number) => {
    // state.todos = todos other than this id
    setState(state.filter((todo: Todo) => todo.id !== id))
}

// Wrapper methods in the store
const todoStore: TodoStore = {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}

export default todoStore

// Set key to need to provide/inject store
// [TODO] Change provide/inject to context
export const todoKey: InjectionKey<TodoStore> = Symbol('todo')