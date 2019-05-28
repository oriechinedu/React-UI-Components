import React from 'react';
import './Button.css';

export default function actionButton({ clicked, type, text}) {
  const style = {
    fontWeight: type === 'clear' ? '100': 'bold'
  }
  return (
    <button 
    className="action-btn"
    onClick={clicked}
    style={style}
    >
      {text}
    </button>
  )
}