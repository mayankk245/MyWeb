import React from "react";
import "./css/home.css";
import Typical from "react-typical";
import Sky from "react-sky";

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
        <Sky
          images={{
            0: "https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png",
            1: "https://images.vexels.com/media/users/3/157970/isolated/preview/c156b4270aea292b9b335dd463ea17eb-earth-planet-icon-earth-icon-by-vexels.png",
            2: "https://www.pngrepo.com/png/125875/170/satellite.png",
            3: "https://vignette.wikia.nocookie.net/samorost6178/images/9/99/Meteor.png/revision/latest?cb=20170128122740"
          }}
          how={30}
          time={100}
          size={"70px"}
          background={"black"}
        />
        <div class="menu">
          <p> Menu </p>
        </div>
        <div class="intro">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxEOVTcvf8wEI1bGPVZrCVADRvWGpFsVzrowss8S1SuQl_xJjK" />
          <p>Mayank Kulkarni</p>
          <div id="type">
            <Typical
              steps={[
                "I'm a",
                1000,
                "I'm a Developer",
                1000,
                "I'm a Avid Learner",
                1000,
                "I'm a Freelancer",
                1000
              ]}
              loop={Infinity}
              wrapper="d"
            />
          </div>
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
