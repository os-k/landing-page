// TestimonialSlideshow.js
import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Coordinator 10Alytics Upwork Optimization Masterclass",
    text: "Hello,I was the coordinator for the Upwork Optimization Session with 10Alytics. I learned a lot from the session, and would like to connect and stay in touch.",
  },
  {
    name: "Attendee",
    text: "Hello, I was at the 10Alytics drop-in session tonight. Your knowledge shared is highly appreciated.",
  },
  {
    name: "Adeola",
    text: "I had an awesome time. I look forward to learning from you and the masterclass.",
  },
  {
    name: "Muheeb Kehinde Oshisanya",
    text: "I would like to join your masterclass, particularly to be more effective with Upwork.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slideshow">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial ${index === current ? "active" : ""}`}
        >
          <p className="testimonial-text">"{testimonial.text}"</p>
          <p className="testimonial-name">- {testimonial.name}</p>
        </div>
      ))}
      <button className="prev testimonial-button" onClick={prevTestimonial}>
        &#10094;
      </button>
      <button className="next testimonial-button" onClick={nextTestimonial}>
        &#10095;
      </button>
    </div>
  );
};

export default Testimonials;
