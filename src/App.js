import React, { Component } from 'react';
import './App.css';
import Img from './Img.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // photos: ['/pics/1.jpg', '/pics/2.jpg', '/pics/3.jpg', '/pics/4.jpg', '/pics/5.jpg', '/pics/6.jpg', '/pics/7.jpg', '/pics/8.jpg', '/pics/9.jpg', '/pics/10.jpg', '/pics/11.jpg'],
      photos: this.photoGen(11),
      currentPic: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  photoGen(n) {
    let arr = [];
    for (var i = 1; i <= n; i++) {
      arr.push('/pics/' + i + '.jpg');
    }
    return arr;
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
          <h2>Welcome to the Carousel</h2>
        </div>
        <div className="carouselContainer" style={{height: (window.innerHeight - 140) + 'px'}}>
          <div className="leftArrow arrow" onClick={() => {this.handleClick('left')}}><p>⇦</p></div>
          <div className="photoContainer">
            {this.state.photos.map((photo, i)=> <Img key={i} src={photo} i={i} currentPic={this.state.currentPic} />)}
          </div>
          <div className="rightArrow arrow"onClick={() => {this.handleClick('right')}}><p>⇨</p></div>
        </div>
      </div>
    );
  }
}

export default App;
