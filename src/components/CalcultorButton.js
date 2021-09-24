import { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.id;
    this.props.handleClick(buttonName);
  }

  render() {
    /* eslint-disable-next-line react/destructuring-assignment */
    const className = `btn-rectingle d-flex justify-content-center align-items-center border ${this.props.className}`
    return (
        // {/* The <div> element has a child elements that allows keyboard interaction */}
        // {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        // {/* <div onClick={this.handleClick} onKeyDown={this.handleClick} role="presentation" className="calculator bg-second d-flex flex-column"> */}
        <div id={this.props.buttonName} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" className={className}>{this.props.buttonName}</div>
    );
  }
}
