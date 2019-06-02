import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

export default function buttonGroup({clicked}) {
  const symbols =  ['÷', '×', '−', '+', '=' ];
  const mathSym =  ['/', '*', '-', '+', '=' ];
  return (
    <div className='btn-control'>
      {symbols.map((sym,i) => {
        return <NumberButton key={`${sym}-${i}`} symbol text={sym} clicked={clicked} value={mathSym[i]}/>
      })}
    </div>
  )
}