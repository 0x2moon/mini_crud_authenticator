import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import MinicrudRoutes from "./Routes";

document.documentElement.classList.add("dark");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MinicrudRoutes />
  </StrictMode>
);
