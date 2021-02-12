import React, { useEffect } from "react";

function ShowEmployeeBasicDetails(props) {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Age: {props.age}</div>
      <div>Employee Designation: {props.designation}</div>
    </div>
  );
}

export default ShowEmployeeBasicDetails;
