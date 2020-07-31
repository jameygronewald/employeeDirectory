import React, { Component } from "react";
import "./Directory.css";
import Employee from "../Employee/Employee";
import employees from "../../dummyData.json";

class Directory extends Component {
  state = {
    employees: employees,
  };

  render() {
    const filteredEmployees = this.state.employees.filter(employee => this.props.filter.toLowerCase() === employee.name.last.slice(0, this.props.filter.length).toLowerCase());
    return filteredEmployees.map((employee, index) => (
      <div>
        <Employee key={index + 1} {...employee} />
      </div>
    ))
  }
}

export default Directory;
