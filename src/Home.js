import React from "react";
import "./css/home.css";
import Typical from 'react-typical';
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
          <div id="type"><Typical
        steps={["I'm a" , 1000, "I'm a Developer", 1000,"I'm a Avid Learner", 1000,"I'm a Freelancer", 1000]}
        loop={Infinity}
        wrapper="d"
      /></div>
    
        </div>
        <div class="bottom1">
          <p>></p>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.setState({ user: "Abcd" });
  }
}

export default Home;
