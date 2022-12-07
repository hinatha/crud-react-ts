import { useState, useCallback } from "react";
import { Todo, Params } from './types';

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

// Custom hook of TodoList
const useTodoList = () => {
  // Set useState and first value is mockTodo
  const [todos, setTodos] = useState<Todo[]>(mockTodo);

  // Add Todo logic
  // Memoization by useCallback
  const addTodo = useCallback(
    (params: Params) => {
      // Change type from Param to Todo
      const todo = intitializeTodo(params)
      // Generate new todo list to change state
      const newTodos = [...todos];
      // Add todo to todo list
      newTodos.push(todo);
      setTodos(newTodos);
    },
    // Set todos as dependent array
    [todos]
  );

  // Function of changing param to Todo
  const intitializeTodo = (todo: Params) =>  {
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

  return { todos, addTodo };
}

export default useTodoList;

