import React, { Component } from 'react';
import mojs from 'mo-js';

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: 19 },
  angle:    45,
  children: {
    shape:        'line',
    radius:       3,
    scale:        1,
    stroke:       '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration:     700,
    easing:       'quad.out',
  }
});

class App extends Component {

    componentDidMount(){
      document.addEventListener( 'click' , (e) => {
         burst
             .tune({ x: e.pageX, y: e.pageY })
             .replay();
      });
    }
    render() {
      return <div>

      </div>;
    }
  }

export default App;
