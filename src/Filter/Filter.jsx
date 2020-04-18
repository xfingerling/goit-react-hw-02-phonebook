import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={onFilter}
      value={value}
      placeholder="Find contact by name"
    />
  );
};

Filter.propTypes = { onFilter: PropTypes.func, value: PropTypes.string };

export default Filter;
