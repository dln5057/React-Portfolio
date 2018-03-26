import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
         <div className="nav-wrapper">
           <a href="/about" className="brand-logo">Donald Nowels</a>
           <a data-activates="mobile-demo" className="button-collapse"><i className="fa fa-bars"></i></a>
           <ul className="right hide-on-med-and-down">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
           </ul>
           <ul className="side-nav" id="mobile-demo">
             <li><a href="sass.html">Sass</a></li>
             <li><a href="badges.html">Components</a></li>
           </ul>
         </div>
       </nav>
      </div>
    )
  }
}

export default Navbar;
