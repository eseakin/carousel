import React from 'react';
import './Img.css';

const Img = function(props) {
  return (
    <div className="Img">
      <img src={props.src} style={props.style} alt="landscape" />
    </div>
  );
}

export default Img;
