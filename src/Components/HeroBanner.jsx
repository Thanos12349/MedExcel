import React from "react";
import "../Style/HeroBanner.css";

const HeroBanner = ({ onExplore, onPartner }) => {
  return (
    <section className="hero-root">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-tagline">
            Upskilling Healthcare Professionals for Tomorrow
          </h1>

          <div className="hero-cta">
            <button
              className="hero-btn hero-btn-primary"
              onClick={onExplore}
            >
              Explore Courses
            </button>
            <button
              className="hero-btn hero-btn-outline"
              onClick={onPartner}
            >
              Partner with Us
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/banner-main.png"
            alt="Healthcare Professionals"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
