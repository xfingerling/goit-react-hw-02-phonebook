import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDelete }) => {
  const listItems = contacts.map(({ id, name, number }) => {
    return (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        id={id}
        onDelete={onDelete}
      />
    );
  });

  return <ul className={styles.list}>{listItems}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
