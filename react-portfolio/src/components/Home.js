import React, { Component } from "react";
import ScrollingHorizontally from "./ScrollComponent";
import Header from "./Header"

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <ScrollingHorizontally />
      </div>

    );
  }
}

export default Home;
