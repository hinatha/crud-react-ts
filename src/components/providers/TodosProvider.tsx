import { createContext, useState } from "react";
import { Todo, TodosState } from '../../types/index';

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

export const TodosContext = createContext<TodosState>({
  todos: mockTodo, // Set mockTodo as initial value
  setTodos: () => {}, // Set as method
});

export const TodosProvider = (props: any) => {
  // Get children from props
  const { children } = props;
  // Set useState and first value is mockTodo
  const [todos, setTodos] = useState<Todo[]>(mockTodo);
  return(
      <TodosContext.Provider value={{ todos, setTodos }}>
          { children }
      </TodosContext.Provider>
  );
};
