import CharactersButton from './components/CharactersButton';


function App() {


return (
  <>
    <CharactersButton></CharactersButton>
  </>
)
}

export default App;



{/*
import './App.css'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Please enter a valid mathematical expression before pressing '='. Make sure you include numbers and operators for the calculation.")
    }
  };

return (
  <div className='App'>
    <div className='calculator-container'> 
      <Screen input = {input}/>
      <div className='row'>
        <Button handlerClick={addInput}>7</Button>
        <Button handlerClick={addInput}>8</Button>
        <Button handlerClick={addInput}>9</Button>
        <Button handlerClick={addInput}>/</Button>
      </div>
      <div className='row'>
        <Button handlerClick={addInput}>4</Button>
        <Button handlerClick={addInput}>5</Button>
        <Button handlerClick={addInput}>6</Button>
        <Button handlerClick={addInput}>*</Button>
      </div>
      <div className='row'>
        <Button handlerClick={addInput}>1</Button>
        <Button handlerClick={addInput}>2</Button>
        <Button handlerClick={addInput}>3</Button>
        <Button handlerClick={addInput}>-</Button>
      </div>
      <div className='row'>
        <Button handlerClick={addInput}>0</Button>
        <Button handlerClick={addInput}>.</Button>
        <Button handlerClick={calculateResult}>=</Button>
        <Button handlerClick={addInput}>+</Button>
      </div>
      {/* al ser una funcion tan sencilla se puede hacer de esta manera */}
//       <ClearButton handlerClear = {() => setInput('')}>
//         Clear
//       </ClearButton>
//       <div className='row'></div>
//     </div>
//   </div>
// )
// }

// export default App;

