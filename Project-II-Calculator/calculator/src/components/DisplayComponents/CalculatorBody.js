import React from 'react';
import './Display.css';
import ButtonContainer from '../ButtonComponents/ButtonContainer'
import ControlButton from '../ButtonComponents/ControlButton'

function calculatorBody({ children, clicked}) {
  return (
    <div className="calc-body">
      <ButtonContainer clicked={clicked}/>
      <ControlButton clicked={clicked} />
    </div>
  )
}

export default calculatorBody;