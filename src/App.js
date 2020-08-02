import React from "react";
import Directory from "./components/Directory/Directory";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    filter: "",
    sort: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="searchRow">
          <input
            className="col"
            value={this.state.filter}
            name="filter"
            type="text"
            placeholder="Filter by last name"
            onChange={this.handleChange}
          />
          <div className="col">
            <label htmlFor="sorting">Sort by: </label>
            <select name="sort" onChange={this.handleChange}>
              <option value="">(none)</option>
              <option value="name.last">Last Name (A-Z)</option>
              <option value="email">Email (A-Z)</option>
              <option value="dob.date">Date of Birth (ascending)</option>
            </select>
          </div>
        </div>
        <Directory filter={this.state.filter} sort={this.state.sort}/>
      </div>
    );
  }
}

export default App;
