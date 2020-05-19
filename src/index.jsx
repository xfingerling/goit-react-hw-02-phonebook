import React from "react";
import { render } from "react-dom";

import "./index.css";

import Phonebook from "./components/Phonebook/Phonebook";

const App = () => <Phonebook />;

render(<App />, document.getElementById("root"));
