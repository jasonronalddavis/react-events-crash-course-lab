import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
       const x = event.clientX;
    const y = event.clientY;

    drawChromeBoiAtCoords(x, y);

  }

funcy = () => {

toggleCycling();

}

magnification = (event) => {
    const target = event.key;

    if (target === 'a') { resize('+') };
    if (target === 's') { resize('-') };

  }



  render() {
    return (
      <canvas onClick={this.funcy} onKeyPress={this.magnification}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
