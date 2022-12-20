import { useCallback } from "react";
import { Link } from "react-router-dom";
import { Todo } from '../types/index';
import TodoItem from "./TodoItem";
import useTodoList from '../hooks/useTodoList'

const App = () => {

  // Get Todo List from custom hooks
  const { todos, deleteTodo } = useTodoList();

  // When clicking title, move to the edit page
  const onClickTitle = (id: number) => {
    // [TODO] Move to edit page
  }

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
