import React, { Component } from 'react';
import './Img.css'

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  componentWillReceiveProps() {
    this.setState({style: {
      left: (50 + 25 * this.props.i) + 'px', 
      top: -(50 - (Math.abs(this.props.currentPic - this.props.i)) * 25) + 'px', 
      zIndex: 5 - (Math.abs(this.props.currentPic - this.props.i)),
      opacity: (1 - Math.abs(this.props.currentPic - this.props.i) / 6)
    }});
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
