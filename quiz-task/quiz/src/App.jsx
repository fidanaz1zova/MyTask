import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
