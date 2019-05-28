import React from 'react';
import './Button.css';
import ActionButton from './ActionButton'
import ButtonGroup from './ButtonGroup'

export default function buttonContainer({clicked}) {
  
  return (
    <div className='btn-container'>
      <ActionButton type="clear" text="Clear"  clicked={clicked}/>
      <ButtonGroup  clicked={clicked} />
      <ActionButton type="zero" text="0"  clicked={clicked}/>
    </div>
  )
}