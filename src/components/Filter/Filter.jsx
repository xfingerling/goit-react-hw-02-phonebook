import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import styles from "./Filter.module.css";
import popTransition from "../../transitions/popTransition.module.css";

const Filter = ({ value, onFilter, isShow }) => {
  return (
    <CSSTransition
      in={isShow}
      timeout={250}
      classNames={popTransition}
      unmountOnExit
    >
      <input
        className={styles.input}
        type="text"
        onChange={onFilter}
        value={value}
        placeholder="Find contact by name"
      />
    </CSSTransition>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.string,
  isShow: PropTypes.bool,
};

export default Filter;
