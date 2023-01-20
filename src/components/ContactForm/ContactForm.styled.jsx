import styled from '@emotion/styled';
import { Field, Form } from 'formik';

const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
gap: 20px;`

const Label = styled.label`
font-size: 18px;
font-weight: bold;
`;

const Input = styled(Field)`
display: block;
margin-top: 10px;
padding: 16px;
width: 450px;
font-size: 24px;
color: gray;
background-color: #fff;
border-radius: 8px;
`;

const Button = styled.button`
cursor: pointer;
padding: 8px 12px;
width: 150px;
color: #000;
border-radius: 8px;
font-weight: bold;
background: #f4f4f4;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 4px rgba(0, 0, 0, 0.15);

     &:active{
    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15);
`

export { Input, Button, FormStyled, Label };