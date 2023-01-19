import React from "react";
import propTypes from 'prop-types';
import { Formik, Form } from "formik";
import * as yup from 'yup'
import { Input, Button} from './ContactForm.styled'

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required()

})

const initialValues = {
    name: '',
    number: '',
}

const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;
        resetForm();
    }

    const handleChange = e => {
    // this.setState({ [name]: value });
  };
    
    const { name, number } = values;
    // 

    return (
            <Formik validationSchema={schema}>
                <Form initialValues={initialValues} onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <Input type="text"
                            name="name"
                            required
                            placeholder="Enter name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            value={name}
                            onChange={handleChange}></Input>
                    </label>
                    <label htmlFor="phone">
                        <Input
                            type='tel'
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="Enter phone number"
                            value={number}
                            onChange={handleChange}>
                        </Input>
                    </label>
                    <Button type='submit'>Add contact</Button>
                </Form>
            </Formik>
        );
    }


ContactForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
};

export default ContactForm;