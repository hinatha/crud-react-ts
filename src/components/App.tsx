import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Todo } from '../types/index';
import TodoItem from "./TodoItem";
import useTodoList from '../hooks/useTodoList'

const App = async () => {

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
    []
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

  await fetchTodos();

  return (
    <div>
        {/* Show todo list */}
        <ul>
          {todos.map((todo: Todo) => (
            <TodoItem todo={todo} key={todo.id} onClickTitle={onClickTitle} onClickDelete={onClickDelete} />
          ))}
        </ul>
        {/* Link for Add Todo */}
        <Link to="new">Add Todo</Link>
    </div>
  );
}

export default App;
