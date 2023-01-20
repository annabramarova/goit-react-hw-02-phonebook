import {Component} from "react";
import propTypes from 'prop-types';
import { Formik} from "formik";
import { Input, Button,FormStyled, Label} from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
}

class ContactForm extends Component {

    handleSubmit = (values, { resetForm }) => {
        resetForm();
    }

    handleChange = e => {
        const { name, number } = e.currentTarget;
        
    };
    
    // const { name, number } = values;
    // 
    render(){
        return (
            <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
                <FormStyled autoComplete="off">
                    <Label htmlFor="name">Name
                        <Input type="text"
                            name="name"
                            required
                            placeholder="Enter name..."
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            onChange={this.handleChange}></Input>
                    </Label>
                    <Label htmlFor="number">Number
                        <Input type='tel'
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="Enter phone number..."
                            onChange={this.handleChange}>
                        </Input>
                    </Label>
                    <Button type='submit'>Add contact</Button>
                </FormStyled>
            </Formik>
        );
    }
}


ContactForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
};

export default ContactForm;