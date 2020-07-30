import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {

    render() {
        return (
            <div className='row'>
                <div>
                    <h3>Name: {this.props.name.first} {this.props.name.last}</h3>
                    <h3>Email: {this.props.email}</h3>
                </div>
            </div>
        );
    }
}

export default Employee;