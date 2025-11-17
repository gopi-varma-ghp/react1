import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sam from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sam />
  </StrictMode>
);
