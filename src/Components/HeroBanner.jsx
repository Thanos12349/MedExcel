import React from "react";
import "../Style/HeroBanner.css";

const HeroBanner = ({ onExplore, onPartner }) => {
  return (
    <section className="hero-root">

      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091215367-59ab6dcef3f5?q=80&w=1920&auto=format&fit=crop')",
        }}
      ></div>
      <div className="hero-overlay"></div>

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
      </div>
    </section>
  );
};

export default HeroBanner;
