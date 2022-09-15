import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Destination />
    </div>
  );
}

export default App;
