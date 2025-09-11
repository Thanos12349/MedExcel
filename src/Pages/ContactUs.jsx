import React from "react";
import "./ContactUs.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="contact-page">
        <Header />
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>
            We’re here to guide you with admissions, courses, or partnerships.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Our Location</h2>
            <p>MEDEXCEL Skill Hub, Mohali, Punjab</p>
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.6151205016!2d76.77941778172217!3d30.73331482094964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feece32d3bb29%3A0x2b8b9116d734dc04!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1701234567890"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p><strong>Phone:</strong> +91-XXXX-XXX-XXX</p>
            <p><strong>Email:</strong> admissions@medexcel.com</p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Chat Now
            </a>
          </div>

          <div className="contact-form">
            <h2>Reach Us Instantly</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Mobile Number" required />
              <select required>
                <option value="">Program of Interest</option>
                <option value="Doctors">Doctors</option>
                <option value="Nurses">Nurses</option>
                <option value="Students">Students</option>
                <option value="Hospitals">Hospitals</option>
              </select>
              <textarea placeholder="Message" rows="4"></textarea>
              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default ContactUs;
