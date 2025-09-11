import React from "react";
import "../Style/ProgramsSnapshot.css";

const ProgramsSnapshot = () => {
  const programs = [
    { title: "Doctors", link: "/programs#doctors" },
    { title: "Nurses", link: "/programs#nurses" },
    { title: "Students", link: "/programs#students" },
    { title: "Hospitals", link: "/programs#hospitals" },
  ];

  return (
    <section className="programs-root">
      <div className="programs-container">
        <h2 className="programs-title">Programs Snapshot</h2>

        <div className="programs-grid">
          {programs.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="programs-card"
            >
              <div className="programs-card-content">
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="programs-cta">
          <a href="/courses" className="programs-btn">
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSnapshot;
