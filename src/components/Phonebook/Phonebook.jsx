import React, { Component } from "react";

import uniqid from "uniqid";

import style from "./Phonebook.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  isUniqueName = ({ name }) => {
    return !this.state.contacts.some((el) => el.name === name);
  };

  handleSubmit = (contact) => {
    if (this.isUniqueName(contact)) {
      const newContact = { id: uniqid(), ...contact };

      this.setState((state) => ({
        contacts: [...state.contacts, newContact],
      }));
    } else {
      alert(`${contact.name} is already exist`);
    }
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((el) => el.id !== id),
    }));
  };

  filterContactsByName = (contacts, filter) => {
    const filtred = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return this.sortContactsAlphabetically(filtred);
  };

  sortContactsAlphabetically = (contacts) => {
    const sortedArr = [...contacts];

    return sortedArr.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = this.filterContactsByName(contacts, filter);
    const sortedContacts = this.sortContactsAlphabetically(contacts);

    return (
      <div>
        <h2 className={style.title}>Phonebook</h2>

        <ContactForm onAddContact={this.handleSubmit} />

        <h2 className={style.title}>Contacts</h2>

        <Filter
          onFilter={this.handleFilter}
          value={filter}
          isShow={contacts.length >= 2}
        />

        <ContactList
          contacts={filter.length ? filtredContacts : sortedContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
