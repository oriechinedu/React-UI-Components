import React from 'react';
import './Display.css';
import ButtonContainer from '../ButtonComponents/ButtonContainer'
import ControlButton from '../ButtonComponents/ControlButton'

function calculatorBody({ children}) {
  return (
    <div className="calc-body">
      <ButtonContainer />
      <ControlButton />
    </div>
  )
}

export default calculatorBody;