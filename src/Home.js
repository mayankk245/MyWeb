import React from "react";
import Axios from "axios";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
    };
  }
  render(){
return(
<div>
<p>{this.props.name}</p>
<p>{this.state.user}</p>
</div>
);
  }

  componentWillMount(){
  
    this.setState({user:'Kulkarni'})
  }
}

export default Home;