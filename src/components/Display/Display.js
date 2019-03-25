import React, { Component } from 'react';
import {MainColors} from "../Color/Color";

class Display extends Component {
  render() {
    return (
        <div>
            <input type="text" className="screen" ref={node => this.screen = node} style={{"backgroundColor": MainColors.dark}} />
        </div>
    );
  }
}

export default Display;
