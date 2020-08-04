import React from "react";
import "./Employee.css";

function Employee(props) {
  return (
    <div className="row">
      <img src={props.picture.thumbnail} alt={props.name.first} />
      <h3>
        {props.name.first} {props.name.last}
      </h3>
      <h3>{props.phone}</h3>
      <h3>{props.email}</h3>
      <h3>{props.dob.date.slice(0, 10)}</h3>
    </div>
  );
}

export default Employee;
