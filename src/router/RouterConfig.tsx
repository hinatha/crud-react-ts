import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../views/App";
import AddTodo from "../views/AddTodo";
import EditTodo from "../views/EditTodo";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="new" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;