import { Component } from "react";
import { nanoid } from 'nanoid';
import contacts from '../data/data.json';
import { Container, Title, ContactsList} from "./App.styled";
import ContactForm from './ContactForm'
import ContactList from './ContactList';


export class App extends Component {
  
    state = {
    contacts: contacts,
    filter: ''
  }
  


    handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

   handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  render() {
    return (
      <Container >
        <Title>Phonebook</Title>
        <ContactForm handleSubmit={this.handleSubmit} />
        <ContactsList> Contacts</ContactsList>
        {/* <Filter filter={filter} handleChange={this.handleChange} /> */}
        <ContactList
          // contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  };
}
