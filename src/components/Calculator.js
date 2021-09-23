import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator bg-second d-flex flex-column">
          <div className="bg-first viewer"> </div>
          <div className="d-flex">
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">AC</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">+/-</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">%</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">/</div>
          </div>
          <div className="d-flex">
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">7</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">8</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">9</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">X</div>
          </div>
          <div className="d-flex">
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">4</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">5</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">6</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">-</div>
          </div>
          <div className="d-flex">
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">1</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">2</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">3</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">+</div>
          </div>
          <div className="d-flex">
            <div className="btn-rectingle btn-zero d-flex justify-content-center align-items-center border">0</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border">.</div>
            <div className="btn-rectingle d-flex justify-content-center align-items-center border bg-temp">=</div>
          </div>
        </div>
      </div>
    );
  }
}
