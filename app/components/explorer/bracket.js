import React from 'react';

export default class Bracket extends React.Component {
  render() {
    return (
      <div className="bracket-svg">
      <svg className="container" width="100%" height="100%" preserveAspectRatio="xMaxYMax" viewBox="100 230 525 10" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
            <rect fill="url(#gridpattern)" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
        <title>Layer 1</title>
          <line id="svg_1" y2="200" x2="500" y1="200" x1="100" stroke="#000" fill="none"/>
          <line id="svg_4" y2="140" x2="300" y1="200" x1="300" stroke="#000" fill="none"/>
          <line id="svg_5" y2="250" x2="100" y1="200" x1="100" stroke="#000" fill="none"/>
          <line id="svg_6" y2="250" x2="233" y1="200" x1="233" stroke="#000" fill="none"/>
          <line id="svg_7" y2="250" x2="366" y1="200" x1="366" stroke="#000" fill="none"/>
          <line id="svg_8" y2="250" x2="500" y1="200" x1="500" stroke="#000" fill="none"/>
        </g>
      </svg>
      </div>
    )
  }
}
