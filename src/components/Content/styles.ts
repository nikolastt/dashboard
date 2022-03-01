import styled from 'styled-components';

export const Container = styled.div`
color: ${props => props.theme.colors.white};
  grid-area: Content;
  transition: ease-in-out 0.5s;
  background-color: ${props => props.theme.colors.primary}
`;
