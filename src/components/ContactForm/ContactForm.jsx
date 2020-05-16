import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

const initialState = { name: "", number: "" };

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    ...initialState,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.setState({ ...initialState });
  };

  handleChange = ({ target }) => {
    const name = target.name;
    let value = target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className={styles.input}
          name="number"
          type="text"
          value={number}
          onChange={this.handleChange}
          placeholder="Number"
          autoComplete="off"
        />

        <button
          className={styles.btn}
          type="submit"
          disabled={!name || !number}
        >
          Add contact
        </button>
      </form>
    );
  }
}
