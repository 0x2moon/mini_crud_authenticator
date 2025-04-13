import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Login from "./screens/Login/index.tsx";
import Home from "./screens/Home/index.tsx";
import SingIn from "./screens/SingIn/index.tsx";

document.documentElement.classList.add("dark");
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Singin" element={<SingIn />} />
    </Routes>
  </BrowserRouter>
);
