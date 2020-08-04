import React from 'react';

const Form = ({ handleChange, filter}) => {
    
    return (
        <div className="searchRow">
          <input
            className="col"
            value={filter}
            name="filter"
            type="text"
            placeholder="Filter by last name"
            onChange={handleChange}
          />
          <div className="col">
            <label htmlFor="sorting">Sort by: </label>
            <select name="sort" onChange={handleChange}>
              <option value="">(none)</option>
              <option value="name.last">Last Name (A-Z)</option>
              <option value="email">Email (A-Z)</option>
              <option value="dob.date">Date of Birth (ascending)</option>
            </select>
          </div>
        </div>
    );
};

export default Form;