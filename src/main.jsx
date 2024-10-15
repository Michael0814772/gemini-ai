import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContentProvider from "./content/Content.jsx";

createRoot(document.getElementById("root")).render(
  <ContentProvider>
    <App />
  </ContentProvider>
);
