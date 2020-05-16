import React, { Component } from "react";
import { render } from "react-dom";

import "./index.css";

import Phonebook from "./components/Phonebook/Phonebook";

class App extends Component {
  render() {
    return <Phonebook />;
  }
}

render(<App />, document.getElementById("root"));
