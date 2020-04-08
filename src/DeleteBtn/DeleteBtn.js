import React from "react";
import PropTypes from "prop-types";

import styles from "./DeleteBtn.module.css";

const DeleteBtn = ({ id, onDelete }) => {
  function handleClick() {
    onDelete(id);
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      Delete
    </button>
  );
};

DeleteBtn.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default DeleteBtn;
