import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator bg-second d-flex flex-column">
          <div className="bg-first viewer"> </div>
          <div className="d-flex m-1">
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">AC</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">+/-</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">%</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">/</div>
          </div>
          <div className="d-flex m-1">
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">7</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">8</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">9</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">X</div>
          </div>
          <div className="d-flex m-1">
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">4</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">5</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">6</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">-</div>
          </div>
          <div className="d-flex m-1">
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">1</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">2</div>
            <div className="btn-rectingle text-first d-flex justify-content-center align-items-center">3</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">+</div>
          </div>
          <div className="d-flex m-1">
            <div className="btn-rectingle btn-zero text-first d-flex justify-content-center align-items-center">0</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">.</div>
            <div className="btn-rectingle text-white d-flex justify-content-center align-items-center">=</div>
          </div>
        </div>
      </div>
    );
  }
}
