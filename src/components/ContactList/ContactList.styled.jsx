import styled from '@emotion/styled';


const List = styled.ul`
  display: flex;
  width: 100%;
  max-width: 480px;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
display: flex;
`;

const ListText = styled.p`

  display: inline-flex;
  margin:0;
  
  margin-right: 10px;
  
  flex-direction: column;
`;

const Button = styled.button`
  cursor: pointer;
padding: 8px 12px;
width: 150px;
color: #000;
border-radius: 8px;
font-weight: bold;
background: #f4f4f4;
margin-left: auto;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 4px rgba(0, 0, 0, 0.15);

     &:active{
    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15);}
`;

export { List, ListItem, ListText, Button };