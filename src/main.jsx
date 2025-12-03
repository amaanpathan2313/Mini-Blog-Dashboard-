import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextData } from "./hooks/useFetch.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextData>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </ContextData>
    </BrowserRouter>
  </StrictMode>
);
