import React from "react";
import Container from "./components/Container";

import "./css/App.css";
import "./css/Container.css";
import "./css/Navbar.css";

class App extends React.Component {
  render() {
    return (
      <div className="box-container">
        <div className="box">
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
