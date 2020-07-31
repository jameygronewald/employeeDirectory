import React, { Component } from "react";
import "./Employee.css";

class Employee extends Component {
  render() {
    return (
      <div className="row">
        <img src={this.props.picture.thumbnail} alt={this.props.name.first} />
        <h3>
          {this.props.name.first} {this.props.name.last}
        </h3>
        <h3>{this.props.phone}</h3>
        <h3>{this.props.email}</h3>
        <h3>{this.props.dob.date}</h3>
      </div>
    );
  }
}

export default Employee;
