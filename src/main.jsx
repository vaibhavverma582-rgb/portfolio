import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/anton";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-mono";
import "@fontsource/space-mono/700.css";
import "@fontsource/great-vibes";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
