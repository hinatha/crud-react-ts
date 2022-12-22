import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import { Link } from "react-router-dom";
import AsyncTodos from "./AsyncTodos";

const App = () => {

    return (
        <div>
            <h2>Show Todo List</h2>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<p>loading...</p>}>
                    <AsyncTodos />
                </Suspense>
            </ErrorBoundary>
            <Link to="new">Add Todo</Link>
        </div>
    );
}

export default App;
