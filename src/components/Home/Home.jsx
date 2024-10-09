import React, {useState}from "react"
import myimg from "/assets/img.png"
import front from "/assets/hbg.png"
import { Link } from "react-router-dom"
import "./Home.css";


export default function Home() {
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
    <>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title pt-italic">DevOps & Frontend Developer</h1>
        <p className="hero-subtitle pt-regular">
          I build beautiful websites and automate virtualization processes. I
          love what I do ❤️
        </p>
        <Link to="contact" className="cta-button">
          Get in touch
        </Link>
      </div>
      <div className="hero-image">
        <img className="my-img" src={myimg} alt="Prateek" />
        <div className="circle"></div>
      </div>
      <img className="front-img" src={front} alt="Background" />
      <div className="about">
        <h3>Hi, I&apos;m Prateek. Nice to meet you.</h3>
        <p>
          Since beginning my journey as a web developer, I&apos;ve worked with
          clients, built websites for startups, and collaborated with talented
          teams to create impactful digital solutions. Whether it&apos;s
          designing a simple landing page or developing complex websites with
          payment systems, I thrive on tackling challenges and continuously
          honing my skills. I&apos;m passionate about Web3, DevOps, and FOSS,
          and I&apos;m always exploring new technologies to push the boundaries
          of what I can create. Confident yet curious, I strive to deliver both
          technical excellence and user-focused experiences.
        </p>
      </div>

    </section>
    <div className="testimonials-section">
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
  </div>
  </>
  );
}
