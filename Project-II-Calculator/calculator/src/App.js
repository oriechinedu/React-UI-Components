import React, { useState } from 'react';
import * as math from 'mathjs'
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorBody from './components/DisplayComponents/CalculatorBody'

 const App = () => {
  const [state, setState] = useState({ result: '' });
  const clickHandler = ({ target }) => {
    setState(prevState => {

      let value = target.dataset.value;

      if (Number(value) || Number(value) === 0) {
        return {
          result: `${prevState.result === '0' ? '' : prevState.result}${value}`
        }
      } else if (value === 'clear') {
        return {
          result: '0',
        }
      } else if (value === '=') {
        try {
          return {
            result: math.eval(prevState.result),
          }
        } catch (e) {
          return {
            result: `${prevState.result}`
          }
        }
      }
      else {
        return {
          result: `${prevState.result} ${value} `
        }
      }
    })
  }
  return (
    <div className="app">
      <CalculatorDisplay value={state.result} />
      <CalculatorBody clicked={clickHandler} />
    </div>
  )
}
export default App;
