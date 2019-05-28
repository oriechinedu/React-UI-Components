import React from 'react';
import './Button.css';
import ActionButton from './ActionButton'
import ButtonGroup from './ButtonGroup'

export default function buttonContainer() {
  
  return (
    <div className='btn-container'>
      <ActionButton type="clear">Clear</ActionButton>
      <ButtonGroup />
      <ActionButton type="zero">0</ActionButton>
    </div>
  )
}