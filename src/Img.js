import React, { Component } from 'react';
import './Img.css'

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    if (this.props.currentPic > this.props.i) {
      //Current Pic is to the Right
      return (
        <div className="Img">
          <img src={this.props.src} style={{left: (50 + 25 * this.props.i) + 'px', zIndex: '-1'}} />
        </div>
      );
    } else if (this.props.currentPic < this.props.i) {
      //Current Pic is to the Left
      return (
        <div className="Img">
          <img src={this.props.src} style={{left: (50 + 25 * this.props.i) + 'px', zIndex: '-1'}} />
        </div>
      );
    } else {
      //Is Current Pic
      return (
        <div className="Img">
          <img src={this.props.src} style={{left: (50 + 25 * this.props.i) + 'px', zIndex: '10'}} />
        </div>
      );
    }
  }
}

export default Img;
