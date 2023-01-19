import propTypes from 'prop-types';

import {
  List,
  ListItem,
  ListText,
  Button,
} from './ContactList.styled';


const ContactList = ({ contacts, handleDelete }) => (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <div>
            <ListText>{name}:</ListText>
            <ListText>{number}</ListText>
          </div>
         <Button
            type="button"
            onClick={() => handleDelete(name.id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );



ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  handleDelete: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  )
};

export default ContactList;