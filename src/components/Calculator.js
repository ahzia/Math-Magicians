import { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButton from './CalcultorButton';

const Calculator = () => {
  const [caculatorObject, setCalculatorObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newObject = calculate(caculatorObject, buttonName);
    setCalculatorObject(newObject);
  };

  return (
    <div className="container">
      <div className="calculator bg-second d-flex flex-column">
        <CalculatorScreen caculatorObject={caculatorObject} />
        <div className="d-flex">
          <CalculatorButton buttonName="AC" handleClick={handleClick} className="text-light" />
          <CalculatorButton buttonName="+/-" handleClick={handleClick} className="text-light" />
          <CalculatorButton buttonName="%" handleClick={handleClick} className="text-light" />
          <CalculatorButton buttonName="÷" handleClick={handleClick} className="text-light" />
        </div>
        <div className="d-flex">
          <CalculatorButton buttonName="7" handleClick={handleClick} />
          <CalculatorButton buttonName="8" handleClick={handleClick} />
          <CalculatorButton buttonName="9" handleClick={handleClick} />
          <CalculatorButton buttonName="x" handleClick={handleClick} className="text-light" />
        </div>
        <div className="d-flex">
          <CalculatorButton buttonName="4" handleClick={handleClick} />
          <CalculatorButton buttonName="5" handleClick={handleClick} />
          <CalculatorButton buttonName="6" handleClick={handleClick} />
          <CalculatorButton buttonName="-" handleClick={handleClick} className="text-light" />
        </div>
        <div className="d-flex">
          <CalculatorButton buttonName="1" handleClick={handleClick} />
          <CalculatorButton buttonName="2" handleClick={handleClick} />
          <CalculatorButton buttonName="3" handleClick={handleClick} />
          <CalculatorButton buttonName="+" handleClick={handleClick} className="text-light" />
        </div>
        <div className="d-flex">
          <CalculatorButton buttonName="0" handleClick={handleClick} className="btn-zero" />
          <CalculatorButton buttonName="." handleClick={handleClick} />
          <CalculatorButton buttonName="=" handleClick={handleClick} className="text-light" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
