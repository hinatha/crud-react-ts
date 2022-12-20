import { useContext, useCallback } from "react";
import { Todo, Params } from '../types/index';
import { TodosContext } from '../components/providers/TodosProvider';

// Custom hook of TodoList
const useTodoList = () => {

  // Get todosState from TodosContext
  const { todos, setTodos } = useContext(TodosContext);

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
    // Set todos and setTodos as dependent relation
    [todos, setTodos]
  );

  // Delete Todo logic
  // Memoization by useCallback
  const deleteTodo = useCallback(
    (id: number) => {
      // Generate new Todo removed the todo
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos);
    },
    // Set todos and setTodos as dependent relation
    [todos, setTodos]
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

  return { todos, addTodo, deleteTodo };
}

export default useTodoList;
