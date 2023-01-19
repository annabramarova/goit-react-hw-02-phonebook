import {Component} from "react";
import propTypes from 'prop-types';
import { Formik, Form, Field } from "formik";
import { Input, Button} from './ContactForm.styled'

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
                <Form autoComplete="off">
                    <label htmlFor="name">
                        <Input type="text"
                            name="name"
                            required
                            placeholder="Enter name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            onChange={this.handleChange}></Input>
                    </label>
                    <label htmlFor="number">
                        <Input type='tel'
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="Enter phone number"
                            onChange={this.handleChange}>
                        </Input>
                    </label>
                    <Button type='submit'>Add contact</Button>
                </Form>
            </Formik>
        );
    }
}


ContactForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
};

export default ContactForm;