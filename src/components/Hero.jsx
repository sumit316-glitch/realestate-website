import React from "react";
import "../App.css";
import headerImg from '../assets/header.png';



export default function Hero() {
  return (
    <section className="hero">
    <img src={headerImg} alt="Featured House" />
    <div className="hero-content">
        <h1>
          For Sale,<br />
          Azamgarh 123
        </h1>
        <button className="details-btn">More Details</button>
      </div>
    </section>
  );
}
