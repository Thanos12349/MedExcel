import React, { useState } from "react";
import "../Style/CoursesSection.css";

const CoursesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Duration");
  const [selectedDuration, setSelectedDuration] = useState(null);

  const courses = [
    {
      title: "Upskilling Course in Nephrology",
      img: "./images/image.png",
      duration: "9 Months",
      price: "Rs. 73,275",
      content: [
        "Understand common and rare renal disorders",
        "Advanced Diagnostic Skills",
        "Specialized Care",
        "End-Stage Renal Disease Management",
        "Medication Safety",
      ],
      eligibility: "MBBS, MD, MS, or DNB doctor",
    },
    {
      title: "Upskilling Course in Critical Care Medicine",
      img: "./images/image.png",
      duration: "3 Months",
      price: "Rs. 53,000",
      content: [
        "Introduction to Critical Care Medicine",
        "Resuscitation and Initial Management",
        "Shock Management",
        "Acid–Base Abnormalities",
        "Case study Modules",
      ],
      eligibility: "MBBS, MD, MS, or DNB doctor",
    },
    {
      title: "Upskilling Course in Advanced Critical Care Medicine",
      img: "./images/image.png",
      duration: "6 Months",
      price: "Rs. 65,000",
      content: [
        "Cardiovascular system",
        "Respiratory system",
        "Central Nervous system",
        "GI Tract",
        "Gastrourinary",
        "Anesthesia",
      ],
      eligibility: "MBBS, MD, MS, or DNB doctor",
    },
    {
      title: "Upskilling Course for Nurses",
      img: "./images/image.png",
      duration: "3 Months",
      price: "Rs. 45,000",
      content: [
        "Patient Care Basics",
        "Advanced Nursing Skills",
        "Medication Safety",
        "Critical Care Assistance",
      ],
      eligibility: "Registered Nurse",
    },
  ];

  const filteredCourses = selectedDuration
    ? courses.filter((c) => c.duration === selectedDuration)
    : courses;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredCourses.length -1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredCourses.length - 1 : prev - 1
    );
  };

  return (
    <div className="container">
    <section className=" explore-courses">
      <div className="explore-header">
        <h2>EMPOWERING HEALTHCARE THROUGH SIMULATION-BASED LEARNING</h2>
        <p>
          Our structured programs are designed to bridge the gap between theory and practice,
          empowering healthcare professionals with real-world skills.
        </p>
      </div>

      <div className="course-tabs">
        {["Duration", "Qualification", "Accreditation Partners", "Course Type"].map(
          (tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
        <button className="view-all">View All</button>
      </div>

      {activeTab === "Duration" && (
        <div className="duration-buttons">
          {["3 Months", "6 Months", "9 Months"].map((dur) => (
            <button
              key={dur}
              className={selectedDuration === dur ? "active" : ""}
              onClick={() =>
                setSelectedDuration(selectedDuration === dur ? null : dur)
              }
            >
              {dur}
            </button>
          ))}
        </div>
      )}
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 320}px)`,
            width: `${filteredCourses.length * 1}px`,
          }}
        >
          {filteredCourses.map((course, idx) => (
            <div className="course-card" key={idx}>
              <img src={course.img} alt={course.title} />
              <h4>{course.title}</h4>
              <p className="duration-price">
                {course.duration} | {course.price}
              </p>
              <ul className="course-content">
                {course.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="eligibility">Eligibility: {course.eligibility}</p>
              <button className="enroll-btn">ENROLL NOW</button>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="carousel-dots">
        {filteredCourses.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
    </div>
  );
};

export default CoursesSection;
