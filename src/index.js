import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";

// Créer un root à partir de l'élément DOM avec createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Utiliser root.render pour rendre l'application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
