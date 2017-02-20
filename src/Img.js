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
    return (
      <div className="Img">
        <img src={this.props.src} />
      </div>
    );
  }
}

export default Img;
