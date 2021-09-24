import { Component } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalcultorButton';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => ({
      obj: calculate(state.obj, buttonName),
    }));
  }

  render() {
    /* eslint-disable-next-line react/destructuring-assignment */
    const { total, next, operation } = this.state.obj;
    return (
      <div className="container">
        <div className="calculator bg-second d-flex flex-column">
          <div className="bg-first viewer d-flex">
            <div className="col-2 p-3">
              <p>{operation}</p>
            </div>
            <div className="col-10 d-flex flex-column align-items-end justify-content-between p-3">
              <p>{total}</p>
              <p>{next}</p>
            </div>
          </div>
          <div className="d-flex">
            <CalculatorButton buttonName='AC' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='+/-' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='%' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='÷' handleClick={this.handleClick} className='bg-temp'/>
          </div>
          <div className="d-flex">
            <CalculatorButton buttonName='7' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='8' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='9' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='x' handleClick={this.handleClick} className='bg-temp'/>
          </div>
          <div className="d-flex">
            <CalculatorButton buttonName='4' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='5' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='6' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='-' handleClick={this.handleClick} className='bg-temp'/>
          </div>
          <div className="d-flex">
            <CalculatorButton buttonName='1' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='2' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='3' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='+' handleClick={this.handleClick} className='bg-temp'/>
          </div>
          <div className="d-flex">
            <CalculatorButton buttonName='0' handleClick={this.handleClick} className='btn-zero'/>
            <CalculatorButton buttonName='.' handleClick={this.handleClick}/>
            <CalculatorButton buttonName='=' handleClick={this.handleClick} className='bg-temp'/>
          </div>
        </div>
      </div>
    );
  }
}
