import React from "react";
import "../Style/Partners.css";

const Partners = () => {
  const logos = [
    { src: "/logos/umass.png", alt: "UMASS" },
    { src: "/logos/ama.png", alt: "Medical Association" },
    { src: "/logos/hospital1.png", alt: "Hospital 1" },
    { src: "/logos/hospital2.png", alt: "Hospital 2" },
    { src: "/logos/hospital3.png", alt: "Hospital 3" },
  ];

  return (
    <section className="partners-root">
      <h2 className="partners-title">Our Partners & Accrediting Bodies</h2>
      <div className="partners-slider">
        <div className="partners-track">
          {logos.concat(logos).map((logo, idx) => (
            <div className="partners-logo" key={idx}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
