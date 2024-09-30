import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <h2 className="logo logo-spin">
          <a href="#">Prateek</a>
        </h2>
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" className="nav-link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
