import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className={styles.input}
          name="number"
          type="text"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Number"
          autoComplete="off"
        />

        <button
          className={styles.btn}
          type="submit"
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </button>
      </form>
    );
  }
}
