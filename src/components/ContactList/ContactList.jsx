import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./ContactList.module.css";
import popTransition from "../../transitions/popTransition.module.css";

import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = ({ contacts = [], onDelete }) => {
  const listItems = contacts.map(({ id, name, number }) => {
    return (
      <CSSTransition
        key={id}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
      >
        <ContactListItem
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      </CSSTransition>
    );
  });

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {listItems}
    </TransitionGroup>
  );
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
