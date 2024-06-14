import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a className="navlinks nav-links" href="/">Home</a>
        <Link
            activeClass="active"
            to="course-overview"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navlinks"
          >
            Course Overview
          </Link>
          <Link
            activeClass="active"
            to="instructors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navlinks"
          >
            Instructors
          </Link>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navlinks"
          >
            Testimonials
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
