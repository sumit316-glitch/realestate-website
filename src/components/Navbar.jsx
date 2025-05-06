import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        {/* <img src="/assets/logo.png" alt="logo" style={{ height: 38, marginRight: 8 }} /> */}
        EstateEase
      </div>
      <nav>
        <a href="#">HOME</a>
        <a href="#">PROPERTY</a>
        <a href="#">TYPES</a>
        <a href="#">AGENTS</a>
        {/* <a href="#">BLOG</a>
        <a href="#">MEMBER AREA</a> */}
      </nav>
    </header>
  );
}
