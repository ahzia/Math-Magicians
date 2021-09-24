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
        <div id={this.props.buttonName} onClick={this.handleClick} onKeyDown={this.handleClick} role="button" className={className}>
            {this.props.buttonName}
        </div>
    );
  }
}
