import { createContext, useState } from "react";
import { Todo, TodosState } from '../../types/index';

export const TodosContext = createContext<TodosState>({
  todos: [], // Set empty array as initial value
  setTodos: () => {}, // Set as method
});

export const TodosProvider = (props: any) => {
  // Get children from props
  const { children } = props;
  // Set useState and first value is empty array
  const [todos, setTodos] = useState<Todo[]>([]);
  return(
      <TodosContext.Provider value={{ todos, setTodos }}>
          { children }
      </TodosContext.Provider>
  );
};
