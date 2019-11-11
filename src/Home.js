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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxEOVTcvf8wEI1bGPVZrCVADRvWGpFsVzrowss8S1SuQl_xJjK" />
          <p>Mayank Kulkarni</p>
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
