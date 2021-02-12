import React from "react";
var HigherOrderComponent = function (WrappedComponent) {
  return class EmployeeDetailComponents extends React.Component {
    constructor() {
      super();
    }

    render() {
      if (this.props.details.id != 2) {
        return (
          <div id="hoc">
            <WrappedComponent {...this.props.details}></WrappedComponent>
          </div>
        );
      } else {
        return <div />;
      }
    }
  };
};

export default HigherOrderComponent;
