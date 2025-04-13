import { BrowserRouter, Route, Routes } from "react-router";
import Login from "@/screens/Login/index.tsx";
import Home from "@/screens/Home/index.tsx";
import Register from "@/screens/Register/index.tsx";
import { PrivateRoute } from "./PrivateRoute";

function MinicrudRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MinicrudRoutes;
