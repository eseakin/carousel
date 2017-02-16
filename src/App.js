import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['/pics/1.jpg', '/pics/2.jpg', '/pics/3.jpg', '/pics/4.jpg', '/pics/5.jpg', '/pics/6.jpg'],
      i: 3
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(side) {
    if(side === 'left' && this.state.i > 0) {
      this.setState((prevState)=>{i: prevState.i--});
    } else if(side === 'right' && this.state.i < this.state.photos.length - 1) {
      this.setState((prevState)=>{i: prevState.i++});
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
          <div className="leftArrow" onClick={() => {this.handleClick('left')}}>⇦</div>
          <img src={this.state.photos[this.state.i]} />
          <div className="rightArrow"onClick={() => {this.handleClick('right')}}>⇨</div>
        </div>
      </div>
    );
  }
}

export default App;
