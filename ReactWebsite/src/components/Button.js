import styled from 'styled-components';
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid lightBlue;
  border-color: ${(props) => (props.cart ? 'yellow' : 'lightBlue')};
  color: ${(props) => (props.cart ? 'yellow' : 'lightBlue')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s;
  &:hover {
    background: ${(props) => (props.cart ? 'yellow' : 'lightBlue')};
    color: blue;
  }
  &:focus {
    outline: none;
  }
`;
