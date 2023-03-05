import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, 380px);
  grid-gap: 30px;

  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  transition: transform 250ms ease-in;
  :hover {
    transform: scale(105%);
  }
`;
