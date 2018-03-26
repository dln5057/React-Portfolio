import React, { Component } from 'react'
import { init } from 'ityped'

export default class Header extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Welcome to My Portfolio!', 'Browse Around!' ] })
  }
  render(){
    return (
      <div className="type-wrap">
        <div id="myElement"></div>
      </div>
    )
  }
}
