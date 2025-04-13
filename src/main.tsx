import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AuthProvider } from "./context/AuthContext";
import MinicrudRoutes from "./Routes";
import "./index.css";

document.documentElement.classList.add("dark");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <MinicrudRoutes />
    </AuthProvider>
  </StrictMode>
);
