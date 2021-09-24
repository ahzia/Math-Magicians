import { Component } from 'react';
import calculate from '../logic/calculate';
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

  handleClick = (e) => {
    const buttonName = e.target.id;
    const keys= '0123456789AC+/-x.=';
    if(buttonName!=='' && keys.includes(buttonName)){
      this.setState((state) => ({
        obj: calculate(state.obj, buttonName),
      }));
    }
  }

  render() {
    const {total, next, operation} = this.state.obj;
    return (
      <div className="container">
        {/* The <div> element has a child elements that allows keyboard interaction */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}  
        <div onClick={this.handleClick} onKeyDown={this.handleClick} role="presentation" className="calculator bg-second d-flex flex-column">
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
            <div id="AC" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">AC</div>
            <div id="+/-" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">+/-</div>
            <div id="%" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">%</div>
            <div id="/" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">/</div>
          </div>
          <div className="d-flex">
            <div id="7" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">7</div>
            <div id="8" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">8</div>
            <div id="9" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">9</div>
            <div id="x" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">x</div>
          </div>
          <div className="d-flex">
            <div id="4" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">4</div>
            <div id="5" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">5</div>
            <div id="6" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">6</div>
            <div id="-" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">-</div>
          </div>
          <div className="d-flex">
            <div id="1" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">1</div>
            <div id="2" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">2</div>
            <div id="3" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">3</div>
            <div id="+" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">+</div>
          </div>
          <div className="d-flex">
            <div id="0" role="button" className="btn-rectingle btn-zero d-flex justify-content-center align-items-center border">0</div>
            <div id="." role="button" className="btn-rectingle d-flex justify-content-center align-items-center border">.</div>
            <div id="=" role="button" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">=</div>
          </div>
        </div>
      </div>
    );
  }
}
