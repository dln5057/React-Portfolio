import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';

class Work extends Component {
  constructor(props) {
  super(props)
}


  render() {

    return (
      <div>
        <img src="http://via.placeholder.com/350x150" />
          <h1>Example Project 1 </h1>
          <a className="btn-floating btn-large waves-effect waves-light "><i class="material-icons">add</i></a>
      </div>
    );
  }
}

export default Work;
