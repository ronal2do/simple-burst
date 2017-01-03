import React, { Component } from 'react';
import mojs from 'mojs';

class Burger extends Component {
    render() {
      return (<div></div>);
    }

    shouldComponentUpdate () {
      this.props.isBurgerPlay && this._burger.replay();
      return false;
    }

    componentDidMount () {
      const dur = 3500,
            dur2 = dur - 500;

      //caching the hotdog shapes
      class BurgerBase extends mojs.CustomShape {
        getShape () { return '<path d="M96.9,52.2c-.4-2.1-2.8-2.8-4.6-3.3l-1.7-.4C89.5,29.9,74.5,18.9,50,18.9S10.5,29.9,9.3,48.5l-1.7.4c-1.8.5-4.1,1.2-4.6,3.3s1.2,3.5,3,4.2l3,.9a7.7,7.7,0,0,0,.7,12.8c1.6,7.7,7,12.8,14.4,12.8H76c7.3,0,12.7-5.1,14.3-12.8A7.7,7.7,0,0,0,91,57.3l3-.9C95.8,55.7,97.4,54.4,96.9,52.2Z" />'; }
      }
      mojs.addShape( 'burgerbase', BurgerBase );

      class Lettuce extends mojs.CustomShape {
        getShape () { return '<path d="M2.1 34.7L91.4 30.9 95.9 34.7 78.3 49.5 13.3 48.5 2.1 34.7z" />'; }
      }
      mojs.addShape( 'lettuce', Lettuce );

      class Cheese extends mojs.CustomShape {
        getShape () { return '<path d="M53 52.2L64.4 61.9 74.3 51.8 53 52.2z" />'; }
      }
      mojs.addShape( 'cheese', Cheese );

      class Tomato extends mojs.CustomShape {
        getShape () { return '<path d="M23,50.3l32.3.7S37.3,67,23,50.3Z" />'; }
      }
      mojs.addShape( 'tomato', Tomato );

      class BurgerTop extends mojs.CustomShape {
        getShape () { return ' <path d="M98.9,52.3c-.4-2.1-2.9-2.9-4.7-3.4l-1.8-.4C91.1,29,75.5,17.5,50,17.5S8.9,29,7.6,48.4l-1.8.4c-1.8.5-4.3,1.3-4.7,3.4s1.2,3.7,3.1,4.4l3.1.9A8,8,0,0,0,8.1,71C9.7,79,15.4,84.3,23,84.3h54c7.6,0,13.3-5.3,14.9-13.4a8,8,0,0,0,.8-13.4l3.1-.9C97.7,55.9,99.4,54.5,98.9,52.3ZM50,21.5c11.3,0,37.1,2.7,38.4,27.5H11.6C12.9,24.2,38.7,21.5,50,21.5Zm2,30.6a19.9,19.9,0,0,1-13,4.4,19.9,19.9,0,0,1-13-4.4Zm25,28.2H23c-5.1,0-9-3.2-10.6-8.3H51.7a33.8,33.8,0,0,1,10.9,7.4A2,2,0,0,0,64,80h0a2,2,0,0,0,1.4-.6A27.9,27.9,0,0,1,80.7,72h6.8C85.9,77.1,82.1,80.3,77.1,80.3ZM59.9,72h8.7A28.7,28.7,0,0,0,64,75.3,39.5,39.5,0,0,0,59.9,72ZM88,54.7a10.9,10.9,0,0,0-5.1,3.5c-1.1,1.2-2.7,3.5-4.6,3.4s-3.8-1.4-5.6-2a7.9,7.9,0,0,0-6.4.3c-2,1-3.5,2.8-5.5,3.7s-3.6-.5-5.1-1.4A11.5,11.5,0,0,0,50,60c-2.2,0-4.1,1.1-5.9,2.2s-3.4,2.1-5.4.9-3.5-2.7-5.5-3.6a8.3,8.3,0,0,0-6.2.1L23.6,61a4.7,4.7,0,0,1-2.4.5c-1.9-.4-3.2-2.3-4.4-3.6a10.8,10.8,0,0,0-5.2-3.3C9.7,54,7.8,53.6,5.9,53l2.2-.6a2,2,0,0,0,1.4.6h10c2.2,4.1,11.1,6,19.5,6s17.3-1.9,19.5-6h32a2,2,0,0,0,1.4-.6l2.2.6C92.1,53.7,90,54,88,54.7Z" />'; }
      }
      mojs.addShape( 'burgertop', BurgerTop );

      const burger_opts = {
        radius:   { 0: '-400' },
        count:    9,
      };

      const burger_child_opts = {
        angle:      { 750: 0 },
        duration:   dur,
        radius:     {75 : 20}
      };

      const burger1 = new mojs.Burst({
        ...burger_opts,
        children: {
          ...burger_child_opts,
          shape:      'burgerbase',
          fill:       '#e89221'
        }
      });

      const burger2 = new mojs.Burst({
        ...burger_opts,
        children: {
          ...burger_child_opts,
          shape:      'lettuce',
          fill:       '#1b8928'
        }
      });

      const burger3 = new mojs.Burst({
        ...burger_opts,
        children: {
          ...burger_child_opts,
          shape:      'cheese',
          fill:       '#f4de11'
        }
      });

      const burger4 = new mojs.Burst({
        ...burger_opts,
        children: {
          ...burger_child_opts,
          shape:      'tomato',
          fill:       '#f24314'
        }
      });

      const burger5 = new mojs.Burst({
        ...burger_opts,
        children: {
          ...burger_child_opts,
          shape:      'burgertop',
          fill:       '#7C0808'
        }
      });

      const burst4 = new mojs.Burst({
        radius:   { 0: 200 },
        angle:    { 200 : 0 },
        children: {
          shape:        'zigzag',
          fill:         'none',
          stroke:       'cyan',
          points:       '6',
          opacity:      { 1 : 0 },
          radius:       20,
          duration:     dur2
        }
      });

      this._burger = new mojs.Timeline()
      .add( burger1, burger2, burger3, burger4, burger5, burst4);
      }

  });

export default Burger;
