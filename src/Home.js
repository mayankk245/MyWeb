import React from "react";
import Axios from "axios";
import "./css/home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  render() {
    return (
      <div class="container">
        <div class="menu">
          <p> Menu </p>
        </div>
        <div class="intro">
          <p> image </p>
          <p>Name </p>
          <p>I am a</p>
        </div>
        <div class="bottom1">
          <p>Down</p>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.setState({ user: "Abcd" });
  }
}

export default Home;
