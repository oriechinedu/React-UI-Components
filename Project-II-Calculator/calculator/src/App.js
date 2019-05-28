import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorBody from './components/DisplayComponents/CalculatorBody'

const OPERATORS = ['÷', '×', '−', '+', '=' ];
export default class App extends React.Component {
  state = {
    result: 0,
  }
  clickHandler = ({ target}) => {
    this.setState(prevState => {

      let value = target.textContent;
      if (Number(value)) {
        return {
          result: `${prevState.result}${value}`
        }
      } else if(value === 'Clear') {
        return {
          result: 0,
        }
      } else if (value ==='=') {
        const [operand1, operator, operand2] = prevState.result.split(' ');
        switch(operator) {
          case OPERATORS[0]:
            return {
              result: operand1 / operand2,
            }
            case OPERATORS[1]:
            return {
              result: operand1 * operand2,
            }

            case OPERATORS[2]:
            return {
              result: operand1 - operand2,
            }
            case OPERATORS[3]:
            return {
              result: operand1 + operand2,
            }
            default:
            return prevState
        }

      }
      return {
        result: `${prevState.result} ${value} `
      }
    })
  }
  render() {
    return (
      <div className="app">
      <CalculatorDisplay value={this.state.result} />
      <CalculatorBody  clicked={this.clickHandler} />
    </div>
    )
  }
}
