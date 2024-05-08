import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/productsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ProductsProvider>
    <Router>
      <App />
    </Router>
</ProductsProvider>
  </>
);
