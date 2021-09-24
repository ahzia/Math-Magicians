import PropTypes from 'prop-types';
import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.id;
    /* eslint-disable-next-line react/destructuring-assignment */
    this.props.handleClick(buttonName);
  }

  render() {
    /* eslint-disable-next-line react/destructuring-assignment */
    const className = `btn-rectingle d-flex justify-content-center align-items-center border ${this.props.className}`;
    return (
    /* eslint-disable-next-line react/destructuring-assignment */
      <div id={this.props.buttonName} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" className={className} tabIndex={0}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
        {this.props.buttonName}
      </div>
    );
  }
}
