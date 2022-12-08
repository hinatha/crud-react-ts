import { Link } from "react-router-dom";
import { Todo } from '../types/index';
import useTodoList from '../hooks/useTodoList'

const App = () => {

  // Get Todo List from custom hooks
  const { todos } = useTodoList();

  return (
    <div>
        <p>Display</p>
        {/* Show todo list */}
        <ul>
          {todos.map((todo: Todo) => (
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

export default App;