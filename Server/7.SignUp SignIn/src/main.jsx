import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "../src/context/ThemeContext.jsx";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
