import React, { useState } from "react";
import "./style.css";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <div style={{display:"flex", gap:"10px"}}>
      <img src="logo.png" style={{width:"50px"}}></img>
      <h2 className="logo">PaintRouteX</h2>
      </div>
      <div className="mobile-nav-icon" onClick={handleNavToggle}>
        ☰
      </div>
      <nav className={`navigation ${isNavVisible ? "visible" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
        <button className="btnLogin-popup" onClick={onLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
