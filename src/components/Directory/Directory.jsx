import React, { Component } from "react";
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
    if (this.props.sort === 'name.last') {
        return this.filterEmployees().sort((a, b) => a.name.last > b.name.last ? 1 : -1);
    } else if (this.props.sort === 'email') {
        return this.filterEmployees().sort((a, b) => a.email > b.email ? 1 : -1);
    } else if (this.props.sort === 'dob.date') {
        return this.filterEmployees().sort((a, b) => parseInt(a.dob.date) - parseInt(b.dob.date));
    }
    return this.filterEmployees();
  };

  render() {
    return this.sortEmployees().map((employee, index) => (
      <div>
        <Employee key={index + 1} {...employee} />
      </div>
    ));
  }
}

export default Directory;