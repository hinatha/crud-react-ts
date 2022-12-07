import useTodoList from '../hooks/useTodoList'
import { Link } from "react-router-dom";

const Todo = () => {
  // get each method or value from custom hooks
  const { todos } = useTodoList();

  return (
    <div>
        <p>Display</p>
        {/* Show todo list */}
        <ul>
          {todos.map((todo) => (
            <li>
                <p>{todo.title}</p>
            </li>
          ))}
        </ul>
        {/* Link for Add Todo */}
        <Link to="new">Add Todo</Link>
    </div>
  );
}

export default Todo;