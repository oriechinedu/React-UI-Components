import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

export default function buttonGroup() {
  const numbers =  [ 7, 8, 9, 4, 5, 6, 1, 2, 3];
  return (
    <div className='btn-group'>
      {numbers.map((num,i) => {
        return <NumberButton key={`${num}${i}`} text={num} />
      })}
    </div>
  )
}