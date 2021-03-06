/* eslint react/destructuring-assignment: 0 */
/* eslint react/prop-types: 0 */
const CalculatorButton = (props) => {
  const handleClick = (e) => {
    const buttonName = e.target.id;
    props.handleClick(buttonName);
  };
  const className = `btn-rectingle d-flex justify-content-center align-items-center text-first ${props.className}`;
  return (
    <div id={props.buttonName} onClick={handleClick} onKeyDown={handleClick} role="button" className={className} tabIndex={0}>
      {props.buttonName}
    </div>
  );
};

export default CalculatorButton;
