import React, { useState, useEffect, useRef } from "react";
import "./Courses.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Doctors");
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card instanceof Element) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card instanceof Element) observer.unobserve(card);
      });
    };
  }, [activeTab]); 

  const coursesData = {
    Doctors: [
      {
        title: "Critical Care Medicine",
        duration: "3 months",
        eligibility: "MBBS, MD, DNB",
        modules: ["Resuscitation", "Shock Management", "Acid–Base Disorders"],
        certification: "Certificate of Completion",
      },
      {
        title: "Advanced Cardiology",
        duration: "3 months",
        eligibility: "MBBS, MD",
        modules: ["Expert Faculty", "Psiloholic Vinoibitis"],
        certification: "Certificate of Completion",
      },
      {
        title: "Surgical Techniques",
        duration: "4 months",
        eligibility: "MBBS, MS",
        modules: ["Clinical Trials", "Facial Structures", "Simulation Rooms"],
        certification: "Certificate of Completion",
      },
      {
        title: "Surgical Techniques",
        duration: "4 months",
        eligibility: "MBBS, MS",
        modules: ["Clinical Trials", "Facial Structures", "Simulation Rooms"],
        certification: "Certificate of Completion",
      },{
        title: "Surgical Techniques",
        duration: "4 months",
        eligibility: "MBBS, MS",
        modules: ["Clinical Trials", "Facial Structures", "Simulation Rooms"],
        certification: "Certificate of Completion",
      },{
        title: "Surgical Techniques",
        duration: "4 months",
        eligibility: "MBBS, MS",
        modules: ["Clinical Trials", "Facial Structures", "Simulation Rooms"],
        certification: "Certificate of Completion",
      },
    ],
    Nurses: [
      {
        title: "Emergency Nursing",
        duration: "2 months",
        eligibility: "GNM, BSc Nursing",
        modules: ["Hondrea Fever", "Selection Tests", "Allergen Caches"],
        certification: "Certificate of Nursing Excellence",
      },
    ],
    Students: [
      {
        title: "Medical Imaging Basics",
        duration: "2 months",
        eligibility: "MBBS Students",
        modules: ["X-Ray Reading", "CT Scan Basics"],
        certification: "Foundation Certificate",
      },
    ],
    Hospitals: [
      {
        title: "Oncology Support Program",
        duration: "4 months",
        eligibility: "Hospital Staff",
        modules: ["Metastasy", "Multidisciplinary Care"],
        certification: "Institutional Certificate",
      },
    ],
  };

  return (
    <div className="page-course">
        <Header />
      <section className="courses-banner">
        <h1>Courses</h1>
        <p>Upskilling Healthcare Professionals for Tomorrow</p>
      </section>

      <div className="course-tabs">
        {Object.keys(coursesData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {coursesData[activeTab].map((course, idx) => (
          <div
            key={idx}
            className="course-card fade-in"
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <h3>{course.title}</h3>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Eligibility:</strong> {course.eligibility}
            </p>
            <ul>
              {course.modules.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <p>
              <strong>Certification:</strong> {course.certification}
            </p>
            <div className="card-actions">
              <button className="apply-btn">Apply Now</button>
              <button className="know-btn">Know More</button>
            </div>
          </div>
        ))}
      </div>
        <Footer />
    </div>
  );
};

export default Courses;
