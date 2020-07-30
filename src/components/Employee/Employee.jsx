import React, { Component } from "react";
import "./Employee.css";

class Employee extends Component {
  render() {
    return (
      <div className="row">
        <img src={this.props.picture.thumbnail} alt={this.props.name.first} />
        <h3>
          Name: {this.props.name.first} {this.props.name.last}
        </h3>
        <h3>Phone: {this.props.phone}</h3>
        <h3>Email: {this.props.email}</h3>
        <h3>DOB: {this.props.dob.date}</h3>
      </div>
    );
  }
}

export default Employee;
