const CalculatorScreen = (props) => {
  if (props.caculatorObject.total === null && props.caculatorObject.next === null) {
    return (
      <div className="bg-first viewer d-flex">
        <div className="col-12 d-flex flex-column align-items-end justify-content-center p-3">
          <p>0</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-first viewer d-flex">
        <div className="col-2 p-3">
          <p>{props.caculatorObject.operation}</p>
        </div>
        <div className="col-10 d-flex flex-column align-items-end justify-content-between p-3">
          <p>{props.caculatorObject.total}</p>
          <p>{props.caculatorObject.next}</p>
        </div>
      </div>
    );
  }
};

export default CalculatorScreen;
