import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <img src="../../Fill.png" alt="" className="nav--image" />
        <h1 className="nav--title">my travel journal.</h1>
      </div>
    </nav>
  );
}
