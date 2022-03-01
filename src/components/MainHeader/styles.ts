import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;
  color: ${props => props.theme.colors.white};
  transition: ease-in-out 0.5s;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem ;
`

export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`
export const Welcome = styled.h3``
export const UserName = styled.span``



