import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {
    render() {
        return (
            <div>
                Your id is: {this.props.id}
            </div>
        );
    }
}

export default Employee;