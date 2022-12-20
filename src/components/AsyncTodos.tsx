import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Todo } from '../types/index';
import TodoItem from "./TodoItem";
import useTodoList from '../hooks/useTodoList'

const AsyncTodos = () => {

  // Get Todo List from custom hooks
  const { todos, fetchTodos, deleteTodo } = useTodoList();

  // To change page
  const navigate = useNavigate();

  // When clicking title, move to the edit page
  const onClickTitle = useCallback(
    (id: number) => {
      // Move to edit page
      navigate("/edit/" + id);
    },
    [navigate]
  );

  // When pushing delete button, receiving todo.id
  // Memoization by useCallback
  const onClickDelete = useCallback(
    (id: number) => {
      // Execute delete todo logic in custom hooks(useTodoList)
      deleteTodo(id);
    },
    // Set deleteTodo as dependent relation
    [deleteTodo]
  );

  // Call fetchTodos
  // Prevent method from re-render
  useEffect(() => {
      (async() => {
        await fetchTodos();
        console.log("Executed fetchTodos")
      })()
    },
    [fetchTodos]
  );

  return (
    <div>
        {/* Show todo list */}
        <ul>
          {todos.map((todo: Todo) => (
            <TodoItem todo={todo} key={todo.id} onClickTitle={onClickTitle} onClickDelete={onClickDelete} />
          ))}
        </ul>
    </div>
  );
}

export default AsyncTodos;
