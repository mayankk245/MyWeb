import React from "react";
import "../css/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="logo">
          <p>MK</p>
        </div>
        <nav>
          <div className="options">
            <ul className="link">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>RESUME</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
