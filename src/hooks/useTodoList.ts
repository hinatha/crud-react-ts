import { useContext, useCallback } from "react";
import { Todo, Params } from '../types/index';
import { TodosContext } from '../components/providers/TodosProvider';
import Repository, { TODOS } from '../clients/RepositoryFactory'


// Custom hook of TodoList
const useTodoList = () => {

  // Get TODOS stored in localstorage
  const TodoRepository = Repository[TODOS];

  // Get todosState from TodosContext
  const { todos, setTodos } = useContext(TodosContext);

  // Get all todos from localstorage
  const fetchTodos = useCallback(
    async () => {
      // getAll() is Promise
      // Get all todos
      const storageTodos = await TodoRepository.getAll()

      // Set storageTodos as todo state
      setTodos(storageTodos);
    },
    [setTodos]
  );

  // Get Todo by id
  const getTodo = useCallback(
    (id: number) => {
      const todo = todos.find((todo) => todo.id === id)
      // In case of not existing todo
      if (!todo) {
        throw new Error(`cannot find todo by id:${id}`)
      }
      return todo
    },
    [todos]
  );

  // Add Todo logic
  // Memoization by useCallback
  const addTodo = useCallback(
    async (params: Params) => {
      // Create todo from params
      const result = await TodoRepository.create(params);
      // Generate new todo list to change state
      const newTodos = [...todos];
      // Add todo to todo list
      newTodos.push(result);
      setTodos(newTodos);
    },
    // Set todos and setTodos as dependent relation
    [todos, setTodos]
  );

  // Update Todo by id
  const updateTodo = useCallback(
    async (id: number, todo: Todo) => {
      // Update Todo of localstorage
      const result = await TodoRepository.update(id, todo);
      // findIndex method returns the position of id
      // If todo.id didn't match id, findIndex returns -1
      const index = todos.findIndex((todo) => todo.id === id)
      if (index === -1) {
        throw new Error(`cannot find todo by id:${id}`)
      };
      // Update Todo by index of list
      todos[index] = todo;
    },
    [todos]
  );


  // Delete Todo logic
  // Memoization by useCallback
  const deleteTodo = useCallback(
    (id: number) => {
      // Delete Todo of localstorage
      TodoRepository.delete(id);
      // Generate new Todo removed the todo
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    // Set todos and setTodos as dependent relation
    [todos, setTodos]
  );

  return { todos, fetchTodos, getTodo, addTodo, updateTodo, deleteTodo };
}

export default useTodoList;
