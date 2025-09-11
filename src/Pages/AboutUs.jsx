
import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./AboutUs.css";

export default function AboutUs() {
  const facilityImages = [
    {
      src: "/assets/sim-lab.jpg",
      alt: "Simulation Lab",
      caption: "Simulation Lab – Hands-on OSCE training",
    },
    {
      src: "/assets/digital-room.jpg",
      alt: "Digital Education Room",
      caption: "Digital Education Room – eBooks, recorded lectures",
    },
    {
      src: "/assets/nursing-class.jpg",
      alt: "Nursing Classroom",
      caption: "Nursing Classroom – Focused skill training",
    },
    {
      src: "/assets/hub-5000sqft.jpg",
      alt: "5000 sq. ft. Hub",
      caption: "5000 sq. ft. hub – multipurpose learning spaces",
    },
  ];

  const faculty = [
    {
      photo: "/assets/faculty1.jpg",
      name: "Dr. Aarti Mehra",
      title: "Senior Clinician — Critical Care",
      expertise: "15+ years in cardiology and simulation training",
    },
    {
      photo: "/assets/faculty2.jpg",
      name: "Prof. Rohit Sharma",
      title: "Head — Medical Education",
      expertise: "Simulation pedagogy and assessment design",
    },
    {
      photo: "/assets/faculty3.jpg",
      name: "Nurse Anita Singh",
      title: "Lead Nurse Trainer",
      expertise: "Clinical skills training & OSCE mentoring",
    },
  ];

  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? facilityImages.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === facilityImages.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="about-container">
        <Header />
      <header className="about-hero">
        <div className="overlay" />
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            Empowering healthcare professionals through innovation, simulation,
            and globally aligned training.
          </p>
        </div>
      </header>

      <main className="about-main">
        {/* Section 1: Vision & Mission */}
        <section className="card">
          <div className="vision-mission">
            <div className="vision">
              <h2>Vision & Mission</h2>
              <p>
                <strong>Vision:</strong> To transform healthcare education with
                experiential, world-class training.
              </p>
            </div>

            <div className="mission">
              <h3>Mission</h3>
              <ul>
                <li>Bridge academic learning with clinical practice</li>
                <li>
                  Provide simulation-based upskilling for doctors, nurses, and
                  students
                </li>
                <li>
                  Support lifelong professional development (CME/CDE)
                </li>
                <li>Enable global placement opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Our Story & Association */}
        <section className="card">
          <div className="story">
            <div className="journey">
              <h2>Our Journey</h2>
              <p>
                The Simulation Hub was founded to close the gap between
                theoretical medical education and hands-on clinical practice.
                Recognising that many graduates lacked structured exposure to
                real-world scenarios, we created a dedicated space where
                learners can practice, fail safely, and gain competence through
                realistic simulation.
              </p>
              <p>
                Today, our hub delivers structured courses, assessments, and
                mentorship to prepare healthcare professionals for contemporary
                clinical challenges.
              </p>
            </div>

            <aside className="association">
              <img src="/assets/umass-logo.png" alt="UMASS Medical Research" />
              <p>
                In partnership with <strong>UMASS Medical Research</strong>, our
                programs meet global standards and are backed by rigorous
                educational research and validation.
              </p>
            </aside>
          </div>
        </section>

        {/* Section 3: Our Facility */}
        <section className="card">
          <h2>Our Facility</h2>

          <div className="facility-carousel">
            <div className="main-image">
              <img
                src={facilityImages[index].src}
                alt={facilityImages[index].alt}
              />
              <div className="caption">{facilityImages[index].caption}</div>
              <button onClick={prev} className="prev">
                ◀
              </button>
              <button onClick={next} className="next">
                ▶
              </button>
            </div>

            <div className="thumbnails">
              {facilityImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setIndex(i)}
                  className={`thumbnail ${i === index ? "active" : ""}`}
                >
                  <img src={img.src} alt={img.alt} />
                  <div>
                    <div>{img.alt}</div>
                    <div>{img.caption}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Faculty & Trainers */}
        <section className="card">
          <h2>Meet Our Experts</h2>
          <p>Experienced clinicians and educators leading simulation training.</p>

          <div className="faculty-grid">
            {faculty.map((f) => (
              <div key={f.name} className="faculty-card">
                <img src={f.photo} alt={f.name} />
                <h3>{f.name}</h3>
                <div>{f.title}</div>
                <div>{f.expertise}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <p>
            Interested in our programs? Get in touch to schedule an on-site
            visit or demo.
          </p>
          <a href="#contact" className="btn">
            Contact Us
          </a>
        </section>
      </main>
        <Footer />
    </div>
  );
}
