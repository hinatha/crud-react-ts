import { Todo } from '../types/index';
import '../css/TodoItem.css';

type Props = {
  todo: Todo;
  onClickTitle: (id: number) => void;
  onClickDelete: (id: number) => void;
};


const TodoItem = (props: Props) => {

  // Divide props
  const { todo, onClickTitle, onClickDelete } = props;

  //Define clickTitle method to parent component
  const clickTitle = (id: number) => {
    onClickTitle(id);
  }
  
  // Define clickDelete method to parent component
  const clickDelete = (id: number) => {
    onClickDelete(id);
  };

  // Change formatDate
  const formatDate = `${todo.createdAt.getFullYear()}/${todo.createdAt.getMonth() + 1}/${todo.createdAt.getDate()}`

  return (
      <div className="card">
          <div>
              <span className="title" onClick={() => clickTitle(todo.id)}>{ todo.title }</span>
              <span className={"status" + " " + `${todo.status}`}>{ todo.status }</span>
          </div>
          <div className="body">作成日：{ formatDate }</div>
          <hr />
          <div className="action">
              <button onClick={() => clickDelete(todo.id)}>削除</button>
          </div>
      </div>
  );
}

export default TodoItem;
