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
      <div class="name">
        <p>{this.props.name}</p>
        <p>{this.state.user}</p>
      </div>
    );
  }

  componentWillMount() {
    this.setState({ user: "Kulkarni" });
  }
}

export default Home;
