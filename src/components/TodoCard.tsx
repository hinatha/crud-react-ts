import TodoContents from './TodoContents'

const style = {
    marginBottom: "20px",
    border: "1px solid",
    boxShadow: "2px 2px 4px gray",
    width: "250px",
}

const TodoCard = () => {
  
    return (
        <div style={ style }>
            <TodoContents />
        </div>
    );
  };
  
  export default TodoCard;
