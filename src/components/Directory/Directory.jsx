import React, { Component } from "react";
import "./Directory.css";
import Employee from "../Employee/Employee";
import employees from "../../dummyData.json";

class Directory extends Component {
  state = {
    employees: employees,
  };

  render() {
    return this.state.employees.map(employee => (
      <div>
        <Employee
          {...employee}
        />
      </div>
    ));
  }
}

export default Directory;
