import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../components/App";
import AddTodo from "../components/AddTodo";
import { TodosProvider } from '../components/providers/TodosProvider';

const RouterConfig = () => {
  return (
    <TodosProvider> {/* Set provider */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Todo />} />
          <Route path="new" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </TodosProvider>
  );
}

export default RouterConfig;