import React from "react";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaGlobe,
  FaDollarSign,
} from "react-icons/fa";
import "../Style/WhyChooseUs.css";

const WhyChooseUs = () => {
  const points = [
    { icon: <FaCertificate />, text: "CDE Certifications" },
    { icon: <FaChalkboardTeacher />, text: "Expert Faculty" },
    { icon: <FaGlobe />, text: "Global Partnerships" },
    { icon: <FaDollarSign />, text: "Affordable Pricing" },
  ];

  return (
    <section className="choose-root">
      <div className="choose-container">
        <h2 className="choose-title">Why Choose Us?</h2>

        <div className="choose-grid">
          {points.map((item, idx) => (
            <div className="choose-item" key={idx}>
              <div className="choose-icon">{item.icon}</div>
              <p className="choose-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
