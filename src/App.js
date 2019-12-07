import React from "react";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>this is main app page</p>
      </div>
    );
  }
}

export default App;
