import React, { Component } from "react";

import uniqid from "uniqid";

import styles from "./Phonebook.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: uniqid(), name: "Hermione Kline", number: "443-89-12" },
      { id: uniqid(), name: "Eden Clements", number: "645-17-79" },
      { id: uniqid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uniqid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  isUnique = ({ name }) => {
    return !this.state.contacts.some((el) => el.name === name);
  };

  handleSubmit = (contact) => {
    if (this.isUnique(contact)) {
      this.setState((state) => ({
        contacts: [...state.contacts, { id: uniqid(), ...contact }],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  handleFilter = (value) => {
    this.setState({ filter: value });
  };

  handleDelete = (id) => {
    const filterContacts = this.state.contacts.filter((el) => el.id !== id);

    this.setState({ contacts: filterContacts });
  };

  filterContactsByName = () =>
    this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  sortContactsAlphabetically = () => {
    const sortedArr = [...this.state.contacts];

    return sortedArr.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onAddContact={this.handleSubmit} />

        <h2 className={styles.titleContacts}>Contacts</h2>
        {this.state.contacts.length >= 2 && (
          <Filter onFilter={this.handleFilter} value={this.state.filter} />
        )}
        <ContactList
          contacts={
            this.state.filter.length
              ? this.filterContactsByName()
              : this.sortContactsAlphabetically()
          }
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
