import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts = [], onDelete }) => {
  const listItems = contacts.map(({ id, name, number }) => {
    return (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return <ul className={styles.list}>{listItems}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
