import { Suspense } from "react";
import { Link } from "react-router-dom";
import AsyncTodos from "./AsyncTodos";

const App = () => {

    return (
        <div>
            <h2>Show Todo List</h2>
            <Suspense fallback={<p>loading...</p>}>
                <AsyncTodos />
            </Suspense>
            <Link to="new">Add Todo</Link>
        </div>
    );
}

export default App;
