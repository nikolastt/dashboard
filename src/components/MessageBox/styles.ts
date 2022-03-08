import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};

  height: 250px;
  padding: 30px 20px ;
  border-radius: 0.5rem;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img{
      width: 35px;
  }
`;
