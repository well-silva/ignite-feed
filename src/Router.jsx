import { Route, Routes } from "react-router-dom";
import { Forum } from "./pages/Forum";
import { ForumList } from "./pages/ForumList";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route
        path="/forum"
        element={<Forum />}
      />
      <Route
        path="/list"
        element={<ForumList />}
      />
      <Route
        path="/"
        element={<Login />}
      />
    </Routes>
  )
}