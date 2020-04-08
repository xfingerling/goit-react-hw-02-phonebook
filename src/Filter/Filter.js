import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

export default class Filter extends Component {
  static propTypes = { onFilter: PropTypes.func, value: PropTypes.string };

  handleChange = (e) => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <input
        className={styles.input}
        type="text"
        onChange={this.handleChange}
        value={this.props.value}
        placeholder="Find contact by name"
      />
    );
  }
}
