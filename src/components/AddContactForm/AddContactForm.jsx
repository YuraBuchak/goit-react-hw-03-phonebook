import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmitForm}
        className={css.addForm}
      >
        <label className={css.addContactLabel}>
          Name
          <input
            className={css.addContactInput}
            onChange={this.handleChangeInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.addContactLabel}>
          Number
          <input
            className={css.addContactInput}
            onChange={this.handleChangeInput}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
