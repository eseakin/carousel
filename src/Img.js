import React, { Component } from 'react';
import './Img.css';

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    };
  }

  setStyle() {
    let currentPic = this.props.currentPic;
    let i = this.props.i;
    let width = window.innerWidth;
    let center = width / 2;
    let containerWidth = width - 100;

    this.setState({
      style: {
        left: (150 - 75 * (currentPic - i)) + 'px', 
        top: ((Math.abs(currentPic - i)) * 15) + 'px', 
        zIndex: 5 - (Math.abs(currentPic - i)),
        opacity: (1 - Math.abs(currentPic - i) / 6)
      }
    });
  }

  componentDidMount() {
    this.setStyle();
  }

  componentDidUpdate() {
    this.setStyle();
  }

  render() {
      return (
        <div className="Img">
          <img src={this.props.src} style={this.state.style} />
        </div>
      );

  }
}

export default Img;
