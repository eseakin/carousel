import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './Img.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['/pics/1.jpg', '/pics/2.jpg', '/pics/3.jpg', '/pics/4.jpg', '/pics/5.jpg', '/pics/6.jpg'],
      currentPic: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(side) {
    let currentPic = this.state.currentPic;
    let length = this.state.photos.length;

    if(side === 'left') {
      if(currentPic > 0) {
        this.setState({currentPic: currentPic - 1});
      }
    } else if(side === 'right') {
      if(currentPic < length - 1) {
        this.setState({currentPic: currentPic + 1});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="carouselContainer">
          <div className="leftArrow arrow" onClick={() => {this.handleClick('left')}}>⇦</div>
          {this.state.photos.map((photo, i)=> <Img key={i} src={photo} i={i} currentPic={this.state.currentPic} />)}
          <div className="rightArrow arrow"onClick={() => {this.handleClick('right')}}>⇨</div>
        </div>
      </div>
    );
  }
}

export default App;
