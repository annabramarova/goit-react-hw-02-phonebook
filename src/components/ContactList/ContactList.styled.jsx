import styled from '@emotion/styled';


const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const ListText = styled.p`
  margin-left: 20px;
`;

const Button = styled.button`
  
`;

export { List, ListItem, ListText, Button };