import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";

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