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
    this.setState((state) => ({
      obj: calculate(state.obj, buttonName),
    }));
  }

  render() {
    return (
      <div className="container">
        <div onClick={this.handleClick} className="calculator bg-second d-flex flex-column">
          <div className="bg-first viewer d-flex">
            <div className="col-2 p-3">
              <p>{this.state.obj.operation}</p>
            </div>
            <div className="col-10 d-flex flex-column align-items-end justify-content-between p-3">
              <p>{this.state.obj.total}</p>
              <p>{this.state.obj.next}</p>
            </div>
          </div>
          <div className="d-flex">
            <div id="AC" className="btn-rectingle d-flex justify-content-center align-items-center border">AC</div>
            <div id="+/-" className="btn-rectingle d-flex justify-content-center align-items-center border">+/-</div>
            <div id="%" className="btn-rectingle d-flex justify-content-center align-items-center border">%</div>
            <div id="/" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">/</div>
          </div>
          <div className="d-flex">
            <div id="7" className="btn-rectingle d-flex justify-content-center align-items-center border">7</div>
            <div id="8" className="btn-rectingle d-flex justify-content-center align-items-center border">8</div>
            <div id="9" className="btn-rectingle d-flex justify-content-center align-items-center border">9</div>
            <div id="x" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">x</div>
          </div>
          <div className="d-flex">
            <div id="4" className="btn-rectingle d-flex justify-content-center align-items-center border">4</div>
            <div id="5" className="btn-rectingle d-flex justify-content-center align-items-center border">5</div>
            <div id="6" className="btn-rectingle d-flex justify-content-center align-items-center border">6</div>
            <div id="-" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">-</div>
          </div>
          <div className="d-flex">
            <div id="1" className="btn-rectingle d-flex justify-content-center align-items-center border">1</div>
            <div id="2" className="btn-rectingle d-flex justify-content-center align-items-center border">2</div>
            <div id="3" className="btn-rectingle d-flex justify-content-center align-items-center border">3</div>
            <div id="+" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">+</div>
          </div>
          <div className="d-flex">
            <div id="0" className="btn-rectingle btn-zero d-flex justify-content-center align-items-center border">0</div>
            <div id="." className="btn-rectingle d-flex justify-content-center align-items-center border">.</div>
            <div id="=" className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">=</div>
          </div>
        </div>
      </div>
    );
  }
}
