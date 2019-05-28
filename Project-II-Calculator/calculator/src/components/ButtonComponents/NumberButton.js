import React from 'react';
import './Button.css';

export default function numberButton({ clicked, text,symbol }) {
  let style = {
    backgroundColor:'white',
  }

  if (symbol) {
    style = {
      backgroundColor:'#a0001e', width: '100%', color: "white"
    }
  }
  return (
    <button
      className="number-btn"
      onClick={clicked}
      style={style}
    >
      {text}
    </button>
  )
}