import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Circles from "./components/Circles/Circles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Circles />
  </StrictMode>
);
