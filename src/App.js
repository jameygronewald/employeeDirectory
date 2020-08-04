import React, {useState} from "react";
import Directory from "./components/Directory/Directory";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form"
import "./App.css";

function App() {
  
  const [state, setState] = useState({
    filter: "",
    sort: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

    return (
      <div className="container">
        <Navbar />
        <Form handleChange={handleChange} filter={state.filter}/>
        <Directory filter={state.filter} sort={state.sort}/>
      </div>
    );
}

export default App;
