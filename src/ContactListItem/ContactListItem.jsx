import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

import DeleteBtn from "../DeleteBtn/DeleteBtn";

const ContactListItem = ({ name, number, onDelete }) => (
  <li className={styles.listItem}>
    {name}: {number}
    <DeleteBtn onDelete={onDelete} />
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
