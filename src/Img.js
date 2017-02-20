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

    this.setState({
      style: {
        left: (window.innerWidth / 2 - 300 - 75 * (currentPic - i)) + 'px', 
        top: (20 + (Math.abs(currentPic - i)) * 15) + 'px', 
        zIndex: 5 - (Math.abs(currentPic - i)),
        opacity: (1 - Math.abs(currentPic - i) / 6)
      }
    });
  }

  componentDidMount() {
    this.setStyle();
    // window.addEventListener('resize', this.setStyle.bind(this));
  }

  componentDidUpdate() {
    this.setStyle();
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.setStyle.bind(this));
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
