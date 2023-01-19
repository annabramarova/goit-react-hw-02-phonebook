import { Component } from "react";
import { nanoid } from 'nanoid';
import contacts from '../data/data.json';
import ContactForm from './ContactForm'


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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <ContactForm  handleSubmit={this.handleSubmit}/>
        React homework template
      </div>
    );
  };
}
