import React from "react";
import Container from "./components/Container";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
