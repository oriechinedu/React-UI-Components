import React from 'react';
import './Display.css';

function calculatorDisplay({ children, value}) {
  return (
    <div className="display">
      { value || 0}
    </div>
  )
}

export default calculatorDisplay;
