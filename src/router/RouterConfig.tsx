import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import AddTodo from "../components/AddTodo";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="new" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;