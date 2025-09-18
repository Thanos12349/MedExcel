import React, { useState } from "react";
import "../Style/CoursesSection.css";

const CoursesSection = () => {
  const [role, setRole] = useState("doctor"); 
  const [duration, setDuration] = useState("1"); 

  const courses = {
    doctor: [
      {
        title: "Upskilling Course in Nephrology",
        duration: 9,
        image: "https://via.placeholder.com/400x250?text=Nephrology",
        details: [
          "Understand common and rare renal disorders",
          "Advanced Diagnostic Skills",
          "Specialized Care",
          "End-Stage Renal Disease Management",
          "Medication Safety",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctor",
      },
      {
        title: "Upskilling courses in Critical Care Medicine",
        duration: 3,
        image: "https://via.placeholder.com/400x250?text=Critical+Care",
        details: [
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
        duration: 6,
        image: "https://via.placeholder.com/400x250?text=Advanced+Critical+Care",
        details: [
          "Cardiovascular system",
          "Respiratory system",
          "Central Nervous system",
          "GI Tract",
          "Anesthesia",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctor",
      },
      {
        title: "Pediatrics Upskilling Course",
        duration: 12,
        image: "https://via.placeholder.com/400x250?text=Pediatrics",
        details: [
          "Pediatric rheumatology",
          "Neuromuscular disorders",
          "Pediatric orthopedics",
          "Pediatric ophthalmology",
          "Pediatric psychology and behavioral care",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctors",
      },
      {
        title: "Gynecology & Obstetrics Upskilling Course",
        duration: 12,
        image: "https://via.placeholder.com/400x250?text=Pediatrics",
        details: [
          "Fetal and maternal health",
          "Gynecological infections",
          "Oncology care in women’s health",
          "Surgical gynecology techniques",
          "Obstetric emergencies and prenatal care",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctors",
      },
      {
        title: "Pulmonology Upskilling Course",
        duration: 12,
        image: "https://via.placeholder.com/400x250?text=Pediatrics",
        details: [
          "Obstructive and vascular lung diseases",
          "Respiratory infections and chronic disorders",
          "Neoplasm care and cancer screening",
          "Sleep disorders and oxygen therapy",
          "Diagnostic imaging in pulmonary care",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctors",
      },
      {
        title: "Clinical Cardiology Upskilling Course",
        duration: 12,
        image: "https://via.placeholder.com/400x250?text=Pediatrics",
        details: [
          "Arrhythmias and conduction disorders",
          "Heart wall anomalies",
          "Congenital defects",
          "Heart failure management",
          "Cardiac imaging and interventions ",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctors",
      },{
        title: "Gastroenterology Upskilling Course",
        duration: 12,
        image: "https://via.placeholder.com/400x250?text=Pediatrics",
        details: [
          "Liver diseases and hepatology",
          "Surgical gastroenterology",
          "Intestinal disorders",
          "Congenital gastrointestinal anomalies",
          "Nutritional support and post-surgical care",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctors",
      },
      {
        title: "Trauma Life Support Course",
        duration: 1,
        image: "https://via.placeholder.com/400x250?text=Trauma+Life+Support",
        details: [
          "Pre-hospital trauma management",
          "Airway stabilization and resuscitation",
          "Shock and blood loss management",
          "Radiology interpretation in trauma",
          "Anesthesia & pain relief in emergency cases",
        ],
        eligibility: "MBBS, MD, MS, or DNB doctor",
      },
    ],
    nurse: [
      {
        title: "Cardiac Nursing Course",
        duration: 3,
        image: "https://via.placeholder.com/400x250?text=Cardiac+Nursing",
        details: [
          "Cardiac monitoring techniques",
          "CCU protocols and interventions",
          "Pharmacology in heart disease",
          "Patient rehabilitation methods",
          "Emergency response strategies",
        ],
        eligibility: "GNM, BSc Nursing, or equivalent",
      },
      {
        title: "Surgical Nursing Course",
        duration: 3,
        image: "https://via.placeholder.com/400x250?text=Surgical+Nursing",
        details: [
          "Operation theater procedures",
          "Post-operative patient care",
          "Aseptic techniques and wound care",
          "Surgical instruments handling",
          "Infection prevention and recovery monitoring",
        ],
        eligibility: "GNM, BSc Nursing, or equivalent",
      },
      {
        title: "Advanced Critical Care Nursing Course",
        duration: 3,
        image: "https://via.placeholder.com/400x250?text=Surgical+Nursing",
        details: [
          "ICU patient management",
          "Ventilator support care",
          "Nutrition planning in critical care",
          "Nutrition planning in critical care",
          "Infection control and advanced monitoring",
        ],
        eligibility: "GNM, BSc Nursing, or equivalent",
      },
      {
        title: "Critical Care Nursing Course",
        duration: 3,
        image: "https://via.placeholder.com/400x250?text=Surgical+Nursing",
        details: [
          "ICU stabilization protocols",
          "Shock management and circulatory support",
          "Ventilation techniques",
          "Monitoring patient vitals",
          "Case studies for hands-on learning",
        ],
        eligibility: "GNM, BSc Nursing, or equivalent",
      },
      {
        title: "Advanced Critical Care Nursing Course",
        duration: 6,
        image: "https://via.placeholder.com/400x250?text=Critical+Care+Nursing",
        details: [
          "ICU patient management",
          "Ventilator support care",
          "Nutrition planning in critical care",
          "Pain management and sedation protocols",
          "Infection control and monitoring",
        ],
        eligibility: "GNM, BSc Nursing, or qualified critical care nurses",
      },
      {
        title: "Nephrology Nursing Course",
        duration: 9,
        image: "https://via.placeholder.com/400x250?text=Nephrology+Nursing",
        details: [
          "Kidney disease nursing care",
          "Hemodialysis and peritoneal dialysis support",
          "Advanced diagnostics support",
          "Chronic kidney care management",
          "Drug safety and monitoring",
        ],
        eligibility: "GNM, BSc Nursing, or equivalent",
      },
    ],
  };

  const filteredCourses = courses[role].filter(
    (c) => !duration || c.duration === duration
  );

  return (
    <>
    <div className="d-flex text-align-center justify-content-center">
         <h1>Upskilling Courses </h1>
      </div>
    <section className="courses-section-root">
      
     
      <div className="courses-section-role-buttons">
        <button
          className={`courses-section-role-btn ${
            role === "doctor" ? "active" : ""
          }`}
          onClick={() => setRole("doctor")}
        >
          Doctor
        </button>
        <button
          className={`courses-section-role-btn ${
            role === "nurse" ? "active" : ""
          }`}
          onClick={() => setRole("nurse")}
        >
          Nurse
        </button>
      </div>
      <div className="courses-section-duration-buttons">
        {[1, 3, 6, 9, 12].map((d) => (
          <button
            key={d}
            className={`courses-section-duration-btn ${
              duration === d ? "active" : ""
            }`}
            onClick={() => setDuration(d)}
          >
            {d} Month{d > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      <div className="courses-section-grid">
        {filteredCourses.map((course, index) => (
          <div key={index} className="courses-section-card">
            <div className="courses-section-card-inner">
              <div className="courses-section-card-front">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p>Duration: {course.duration} Months</p>
                
              </div>
              <div className="courses-section-card-back">
                <h4>Courses include:</h4>
                <ul>
                  {course.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  <strong>Eligibility:</strong> {course.eligibility}
                </p>
                <button className="courses-section-enroll">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};
export default CoursesSection;
