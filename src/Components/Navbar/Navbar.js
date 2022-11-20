import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <span className="nav-logo">myQuiz</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/">Home</Link>
          <Link to="/results">Results</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
  };
  
  export default Navbar;