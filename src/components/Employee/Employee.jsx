import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {

    render() {
        return (
            <div className='row'>
                <div>
                    <h3>{this.props.firstName} {this.props.lastName}</h3>
                </div>
            </div>
        );
    }
}

export default Employee;