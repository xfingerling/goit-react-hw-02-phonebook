import React from "react";
import PropTypes from "prop-types";

import styles from "./DeleteBtn.module.css";

const DeleteBtn = ({ onDelete }) => {
  return (
    <button className={styles.btn} onClick={onDelete}>
      Delete
    </button>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default DeleteBtn;
