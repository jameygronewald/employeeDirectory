import React, { Component } from "react";
import "./Directory.css";
import Employee from "../Employee/Employee";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployees().then(({ data: { results } }) => this.setState({ employees: results })).catch(err => console.log(err));
  };

  filterEmployees() {
    return this.state.employees.filter(employee => this.props.filter.toLowerCase() === employee.name.last.slice(0, this.props.filter.length).toLowerCase());
  };

  sortEmployees() {
    return this.state.employees.sort((a, b) => a.email > b.email ? 1 : -1);
  };

  render() {
    // filteredEmployees.sort((a, b) => a.email - b.email);
    return this.sortEmployees().map((employee, index) => (
      <div>
        <Employee key={index + 1} {...employee} />
      </div>
    ));
  }
}

export default Directory;
