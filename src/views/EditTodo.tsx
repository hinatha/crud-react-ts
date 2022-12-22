import { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Status, Params } from '../types/index';
import useTodoList from '../hooks/useTodoList';
import { useParams } from 'react-router-dom'


const EditTodo = () => {

    // Get addTodo method from custom hooks
    const { getTodo, updateTodo } = useTodoList();

    // Get url parameter
    const urlParams = useParams<{ id: string }>()

    // Change id(string) to Number type
    const id = Number(urlParams.id);

    // Get todo by id from todoStore
    const todo = getTodo(id)

    // Todo form(param) State
    // The first value is original todo
    const [param, setParam] = useState<Params>({ title: todo.title, description: todo.description, status: todo.status });

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

    // To redirect to top package
    const navigate = useNavigate();

    // Get each value from param
    const { title, description, status } = param;

    // When push add button
    const onClickUpdate = () => {
        // Execute update todo method
        updateTodo(id, 
            {
                // Other title, description and status
                ...todo,
                // Form values after changing todo
                title,
                description,
                status
            });
        // Redirect to top page
        navigate('/');
    };

    return (
    <div>
        <h2>Edit TODO</h2>
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
        <button onClick={() => onClickUpdate()}>Update</button>
    </div>
    );
}

export default EditTodo;
