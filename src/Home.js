import React from "react";
import "./css/home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  render() {
    return <p>This is para.</p>;
  }
}

export default Home;
