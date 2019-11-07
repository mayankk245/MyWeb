import React from "react";
import Axios from "axios";
import Home from "./Home.js";

class App extends React.Component {
  render() {
    return <Home name="Mayank" />;
  }
  componentWillMount() {
    Axios("google.com").then(response => {
      console.log(response);
    });
  }
}

export default App;
