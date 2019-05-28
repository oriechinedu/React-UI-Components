import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay value="9" />
    </div>
  );
};

export default App;
