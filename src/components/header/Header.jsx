import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/pov-1.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Bahrul Anwar</h1>
        <h5 className="text-light">Junior Web Development</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
