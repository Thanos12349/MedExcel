// import React from "react";
// import Slider from "react-slick";
// import "../Style/Testimonials.css";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Nat Reynolds",
//       role: "Chief Accountant",
//       text: "The simulation training was outstanding — it helped me refine my clinical skills with confidence.",
//       img: "/images/user1.jpg",
//     },
//     {
//       name: "Celia Almeida",
//       role: "Secretary",
//       text: "CDE certifications boosted my career. The faculty guidance was excellent throughout the journey.",
//       img: "/images/user2.jpg",
//     },
//     {
//       name: "Bob Roberts",
//       role: "Sales Manager",
//       text: "The hybrid learning approach gave me flexibility while still feeling hands-on and interactive.",
//       img: "/images/user3.jpg",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: false,
//     appendDots: (dots) => (
//       <div style={{ marginTop: "20px" }}>
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="custom-dot" />
//     ),
//   };

//   return (
//     <section className="testimonial-root">
//       <div className="testimonial-container">
//         <h2 className="testimonial-title">Testimonials</h2>

//         <Slider {...settings} className="testimonial-slider">
//           {testimonials.map((item, idx) => (
//             <div key={idx} className="testimonial-card">
//               <div className="testimonial-inner">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="testimonial-avatar"
//                 />
//                 <p className="testimonial-text">“{item.text}”</p>
//                 <h4 className="testimonial-name">{item.name}</h4>
//                 <p className="testimonial-role">{item.role}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "../Style/Testimonials.css";

const Testimonials = () => {
  const [showStories, setShowStories] = useState(false);
  const videoRef = useRef(null);

  const testimonials = [
    {
      name: "Nat Reynolds",
      role: "Chief Accountant",
      text: "The simulation training was outstanding — it helped me refine my clinical skills with confidence.",
      img: "/images/user1.jpg",
    },
    {
      name: "Celia Almeida",
      role: "Secretary",
      text: "CDE certifications boosted my career. The faculty guidance was excellent throughout the journey.",
      img: "/images/user2.jpg",
    },
    {
      name: "Bob Roberts",
      role: "Sales Manager",
      text: "The hybrid learning approach gave me flexibility while still feeling hands-on and interactive.",
      img: "/images/user3.jpg",
    },
  ];

  const stories = [
    { video: "/videos/story1.mp4", title: "Doctor’s Journey" },
    { video: "/videos/story2.mp4", title: "Nurse Upskilling" },
    { video: "/videos/story3.mp4", title: "Student Success" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const handlePlay = () => videoRef.current && videoRef.current.play();
  const handlePause = () => videoRef.current && videoRef.current.pause();
  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="feedback-root">
      <div className="feedback-container">
        <div className="feedback-header">
          <h2>{showStories ? "Success Stories" : "What Do Our Users Say?"}</h2>
          <button
            className="toggle-btn"
            onClick={() => setShowStories(!showStories)}
          >
            {showStories ? "Show Testimonials" : "Show Stories"}
          </button>
        </div>

        {/* Testimonials Section */}
        {!showStories && (
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <img src={item.img} alt={item.name} className="testimonial-img" />
                <p className="testimonial-text">“{item.text}”</p>
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-role">{item.role}</p>
              </div>
            ))}
          </Slider>
        )}

        {/* Stories Section */}
        {showStories && (
          <>
            <Slider {...settings}>
              {stories.map((story, idx) => (
                <div key={idx} className="story-card">
                  <video
                    ref={videoRef}
                    src={story.video}
                    className="story-video"
                    controls={false}
                  />
                  <h4 className="story-title">{story.title}</h4>
                </div>
              ))}
            </Slider>
            <div className="video-controls">
              <button onClick={handlePlay}>▶ Play</button>
              <button onClick={handlePause}>⏸ Pause</button>
              <button onClick={handleStop}>⏹ Stop</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
