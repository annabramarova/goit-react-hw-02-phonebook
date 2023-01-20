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
            <ListText>{name}:  {number} </ListText>
              <Button id={id} type="button"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );


export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  handleDelete: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ).isRequired,
};