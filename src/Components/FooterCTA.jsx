import React from "react";
import "../Style/FooterCTA.css";

const FooterCTA = ({ onApply }) => {
  return (
    <section className="footer-cta-root">
      <div className="footer-cta-container">
        <h2 className="footer-cta-text">
          Join Our Next Batch / Talk to a Counsellor
        </h2>
        <button className="footer-cta-btn" onClick={onApply}>
          Apply Today
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;
