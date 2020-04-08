import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

import DeleteBtn from "../DeleteBtn/DeleteBtn";

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <li className={styles.listItem}>
        {name}: {number}
        <DeleteBtn id={id} onDelete={onDelete} />
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
