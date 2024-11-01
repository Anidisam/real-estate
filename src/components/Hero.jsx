import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/css/hero.css";
import heroHouse from "../assets/images/hero-house.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">
          THE BEST PLACE <br />
          TO FIND YOUR <br />
          DREAM HOUSE
        </h1>
        <p className="hero-description">
          We Are Real Estate Agency That Will Help You In Designing A <br />{" "}
          Modern And Minimalist Dream House. Let's Discuss
        </p>

        <div className="search-bar">
          <FaMapMarkerAlt className="location-icon" />
          <input type="text" placeholder="Search location" />
          <button className="search-button">Search</button>
        </div>

        <div className="statistics">
          <div className="stat">
            <h1>1200+</h1>
            <h4>Premium Product</h4>
          </div>
          <div className="stat">
            <h1>4000+</h1>
            <h4>Happy Customer</h4>
          </div>
          <div className="stat">
            <h1>240+</h1>
            <h4>Award Winning</h4>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroHouse} alt="House" className="house-image" />
      </div>
    </section>
  );
};

export default Hero;
