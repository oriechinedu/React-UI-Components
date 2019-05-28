import React from 'react';
import './Button.css';
import ActionButton from './ActionButton'
import ButtonGroup from './ButtonGroup'

export default function buttonContainer() {
  
  return (
    <div className='btn-container'>
      <ActionButton type="clear" text="Clear" />
      <ButtonGroup />
      <ActionButton type="zero" text="0" />
    </div>
  )
}