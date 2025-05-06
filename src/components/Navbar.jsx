import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        {/* <img src="/assets/logo.png" alt="logo" style={{ height: 38, marginRight: 8 }} /> */}
        EstateEase
      </div>
      <nav className="navbar-center">
        <a href="#">HOME</a>
        <a href="#">PROPERTY</a>
        <a href="#">TYPES</a>
        <a href="#">AGENTS</a>
      </nav>
      <div className="navbar-auth">
    <a href="#" className="login">Login</a>
    <a href="#" className="signup">SignUp</a>
  </div>
    </header>
  );
}
