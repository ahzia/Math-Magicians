import { Component } from 'react';

/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
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
    const className = `btn-rectingle d-flex justify-content-center align-items-center border ${this.props.className}`;
    return (
      <div id={this.props.buttonName} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" className={className} tabIndex={0}>
        {this.props.buttonName}
      </div>
    );
  }
}
