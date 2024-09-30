import React, { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Prateek is a pleasure to work with, and we look forward to collaborating with him again. He's definitely the kind of developer you can trust with a project from start to finish.",
      job_profile: "Senior Developer",
      company: "TechCorp",
    },
    {
      name: "Jane Smith",
      feedback:
        "Working with Prateek was an excellent experience. His technical skills and attention to detail resulted in a top-notch product that exceeded our expectations.",
      job_profile: "Project Manager",
      company: "InnovateTech",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-head">
        <h2 className="pt-regular">Testimonials</h2>
        <p className="pt-italic">
          People I've worked with have said some nice things...
        </p>
      </div>
      <div className="testimonials-slider">
        <button className="slider-button prev" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="testimonial-card">
          <h1> {testimonials[currentTestimonial].name} </h1>
          <p className="feedback">
            {testimonials[currentTestimonial].feedback}
          </p>
          <h3>{testimonials[currentTestimonial].name}</h3>
          <p className="job-info">
            {testimonials[currentTestimonial].job_profile},{" "}
            {testimonials[currentTestimonial].company}
          </p>
        </div>
        <button className="slider-button next" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
