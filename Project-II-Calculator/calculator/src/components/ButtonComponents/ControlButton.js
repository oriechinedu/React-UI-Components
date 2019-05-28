import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

export default function buttonGroup() {
  const symbols =  ['÷', '×', '−', '+', '=' ];
  return (
    <div className='btn-control'>
      {symbols.map((sym,i) => {
        return <NumberButton key={`${sym}-${i}`} symbol>{sym}</NumberButton>
      })}
    </div>
  )
}