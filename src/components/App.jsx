import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './Phonebook.module.css';

const ST_KEY = 'ST_KEY';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parseStorage = JSON.parse(localStorage.getItem(ST_KEY));

    if (parseStorage) {
      this.setState({ contacts: parseStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(ST_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = info => {
    const { name, number } = info;
    const normalizeName = name.toLowerCase();
    const isContact = this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(normalizeName);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (isContact) {
      alert(`${name} was added earlyer`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  filterInput = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <h2 className={css.titleFilter}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contactArrays={this.filterInput()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
