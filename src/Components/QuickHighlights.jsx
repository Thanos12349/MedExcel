import React from "react";
import {
  FaCertificate,
  FaStethoscope,
  FaUserGraduate,
  FaLaptopHouse,
} from "react-icons/fa";
import "../Style/QuickHighlights.css";

const QuickHighlights = () => {
  const highlights = [
    { icon: <FaCertificate />, text: "Certified Programs" },
    { icon: <FaStethoscope />, text: "Simulation Training" },
    { icon: <FaUserGraduate />, text: "Placement Support" },
    { icon: <FaLaptopHouse />, text: "Hybrid Learning" },
  ];

  return (
    <section className="quick-root">
      <div className="quick-container">
        {highlights.map((item, idx) => (
          <div className="quick-item" key={idx}>
            <div className="quick-icon">{item.icon}</div>
            <p className="quick-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickHighlights;
