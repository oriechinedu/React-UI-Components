import React from 'react';
import './Button.css';

export default function actionButton({ clicked, type, children}) {
  const style = {
    fontWeight: type === 'clear' ? 'initial': 'bold'
  }
  return (
    <button 
    className="action-btn"
    onClick={clicked}
    style={style}
    >
      {children}
    </button>
  )
}