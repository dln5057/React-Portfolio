import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import Work from "./Work";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Work5 from "./Work5";

class ScrollingHorizontally extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="Container" style={{ height: `40em`}}>
          <HorizontalScroll >
            <div className='tile' style={{width: "55em", backgroundColor: "blue"}}>
              <Work />
            </div>
            <div className='tile' style={{width: "55em", backgroundColor: "white"}}>
              <Work2 />
            </div>
            <div className='tile' style={{width: "55em", backgroundColor: "green"}}>
              <Work3 />
            </div>
            <div className='tile' style={{width: "55em", backgroundColor: "pink"}}>
              <Work4 />
            </div>
            <div className='tile' style={{width: "55em", backgroundColor: "red"}}>
              <Work5 />
            </div>
          </HorizontalScroll>
      </div>
    )
  }
}

export default ScrollingHorizontally;
