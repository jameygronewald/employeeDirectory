import React, { Component } from 'react';
import './Directory.css';
import Employee from '../Employee/Employee';

class Directory extends Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
                <Employee id={5}/>
            </div>
        );
    }
}

export default Directory;