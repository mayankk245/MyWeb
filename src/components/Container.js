import React from "react";
import Navbar from "./Navbar";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main-content">
          <h1>Mayank Kulkarni</h1>
        </div>

        <div className="footer" />
      </div>
    );
  }
}

export default Container;
