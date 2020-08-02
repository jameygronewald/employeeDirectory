import React from "react";
import Directory from "./components/Directory/Directory";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    filter: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="inputRow">
          <input
            value={this.state.filter}
            name="filter"
            type="text"
            placeholder="Filter by last name"
            onChange={this.handleChange}
          />
        </div>
        <Directory filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
