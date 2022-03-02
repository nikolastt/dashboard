import styled from 'styled-components';

export const Container = styled.div`
color: ${props => props.theme.colors.white};
  grid-area: Content;
  transition: ease-in-out 0.5s;
  background-color: ${props => props.theme.colors.primary};
  padding: 1.5rem;
  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 10px;
    
    
  }

  ::-webkit-scrollbar-thumb{
    background-color:  ${props => props.theme.colors.secondary};    
    border-radius: 0.5rem;
    
  }

  ::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 0.5rem;
    
  }
`;
