import React, { useState, useEffect } from "react";
import Employee from "../Employee/Employee";
import API from "../../utils/API";

function Directory ({filter, sort}) {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then(({ data: { results } }) => setEmployees(results))
      .catch(err => console.log(err));
  }, []);

  const filterEmployees = () => {
    return employees.filter(
      employee =>
        filter.toLowerCase() ===
        employee.name.last.slice(0, filter.length).toLowerCase()
    );
  }

  const sortEmployees = () => {
    if (sort === "name.last") {
      return filterEmployees().sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
    } else if (sort === "email") {
      return filterEmployees().sort((a, b) =>
        a.email > b.email ? 1 : -1
      );
    } else if (sort === "dob.date") {
      return filterEmployees().sort(
        (a, b) => parseInt(a.dob.date) - parseInt(b.dob.date)
      );
    }
    return filterEmployees();
  }

    return (
      <div>
        <div className="tableHeaderRow">
          <h2>Image</h2>
          <h2>Name</h2>
          <h2>Phone Number</h2>
          <h2>Email</h2>
          <h2>Date of Birth</h2>
        </div>
        {sortEmployees().map((employee, index) => (
          <Employee key={index + 1} {...employee} />
        ))}
      </div>
    );
}

export default Directory;
