import React from "react";
import myimg from "../assets/img.png";
import front from "../assets/hbg.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title pt-italic">DevOps & Frontend Developer</h1>
        <p className="hero-subtitle pt-regular">
          I build beautiful websites and automate virtualization processes. I
          love what I do ❤️
        </p>
        <a href="#contact" className="cta-button">
          Get in touch
        </a>
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
  );
}
