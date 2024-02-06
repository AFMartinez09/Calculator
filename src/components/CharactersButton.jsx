import '../stylesheets/CharactersButton.css';
import ClearButton from './ClearButton';
import OperatorButton from './OperatorButton';
import ScreenCalculator from './ScreenCalculator';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function CharactersButton() {
  const [input, setInput] = useState('');
  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert(
        "Please enter a valid mathematical expression before pressing '='. Make sure you include numbers and operators for the calculation."
      );
    }
  }
    
    return (
      <div className='App'>
        <div className='calculator-container'> 
            <ScreenCalculator input = {input} />
          <div className='row'>
            <OperatorButton handlerClick={addInput}>7</OperatorButton>
            <OperatorButton handlerClick={addInput}>8</OperatorButton>
            <OperatorButton handlerClick={addInput}>9</OperatorButton>
            <OperatorButton handlerClick={addInput}>/</OperatorButton>
          </div>
          <div className='row'>
            <OperatorButton handlerClick={addInput}>4</OperatorButton>
            <OperatorButton handlerClick={addInput}>5</OperatorButton>
            <OperatorButton handlerClick={addInput}>6</OperatorButton>
            <OperatorButton handlerClick={addInput}>*</OperatorButton>
          </div>
          <div className='row'>
            <OperatorButton handlerClick={addInput}>1</OperatorButton>
            <OperatorButton handlerClick={addInput}>2</OperatorButton>
            <OperatorButton handlerClick={addInput}>3</OperatorButton>
            <OperatorButton handlerClick={addInput}>-</OperatorButton>
          </div>
          <div className='row'>
            <OperatorButton handlerClick={addInput}>0</OperatorButton>
            <OperatorButton handlerClick={addInput}>.</OperatorButton>
            <OperatorButton handlerClick={calculateResult}>=</OperatorButton>
            <OperatorButton handlerClick={addInput}>+</OperatorButton>
          </div>
          {/* al ser una funcion tan sencilla se puede hacer de esta manera */}
          <ClearButton handlerClear = {() => setInput('')}>
            Clear
          </ClearButton>
          <div className='row'></div>
        </div>
      </div>
    )
  }

export default CharactersButton