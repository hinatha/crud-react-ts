import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todo />} />
        <Route path="new" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;