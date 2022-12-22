import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'
import { Link } from "react-router-dom";
import AsyncTodos from "../components/AsyncTodos";

const App = () => {

    return (
        <div>
            <h2>Show Todo List</h2>
            {/* Set error handler */}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <AsyncTodos />
            </ErrorBoundary>
            <Link to="new">Add Todo</Link>
        </div>
    );
}

export default App;
