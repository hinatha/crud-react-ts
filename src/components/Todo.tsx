import useTodoList from '../hooks/useTodoList'

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
    </div>
  );
}

export default Todo;
