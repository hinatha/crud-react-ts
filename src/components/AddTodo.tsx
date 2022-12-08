import { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Status, Params } from '../types/index';
import useTodoList from '../hooks/useTodoList'


const AddTodo = () => {

    // Todo form(param) State
    const [param, setParam] = useState<Params>({ title: '', description: '', status: 'waiting' });

    // To redirect to top package
    const navigate = useNavigate();

    // Set input content to state when input title form
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setParam((prevParam) => ({ ...prevParam, title: newTitle }));
    }

    // Set input content to state when input description form
    const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        const newDescription = e.target.value;
        setParam((prevParam) => ({ ...prevParam, description: newDescription }));
    }

    // Set input content to state when input description form
    const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as Status;
        setParam((prevParam) => ({ ...prevParam, status: newStatus }));
    }

    // Get addTodo method from custom hooks
    const { addTodo } = useTodoList();

    // When push add button
    const onClickAdd = () => {
        // Execute add todo method
        addTodo(param);
        // Redirect to top page
        navigate('/');
    };

    return (
    <div>
        <h2>Add TODO</h2>
        <div>
            <label>タイトル</label>
            <input type="text" value={param.title} onChange={onChangeTitle} />
        </div>
        <div>
            <label>説明</label>
            <input id="description" value={param.description} onChange={onChangeDescription} />
        </div>
        <div>
            <label>ステータス</label>
            <select id="status" value={param.status} onChange={onChangeStatus}>
                <option value="waiting">waiting</option>
                <option value="working">working</option>
                <option value="completed">completed</option>
                <option value="pending">pending</option>
            </select>
        </div>
        <button onClick={() => onClickAdd()}>Add</button>
    </div>
    );
}
  
export default AddTodo;