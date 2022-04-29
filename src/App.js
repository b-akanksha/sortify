import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sort/:id" element={<Sort />} />
      </Routes>
    </div>
  );
}

export default App;
