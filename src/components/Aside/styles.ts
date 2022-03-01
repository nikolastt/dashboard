import styled from 'styled-components';

export const Container = styled.div`

grid-area: Aside;
color: ${props => props.theme.colors.white};
transition: ease-in-out 0.5s;
background-color: ${props => props.theme.colors.secondary};
border-right: 1px solid ${props => props.theme.colors.gray};
  
`;

export const HeaderAside = styled.div`
display:flex;
height: 70px;
align-items: center;
justify-content: center;

`
export const LogoImg = styled.img`
    width: 40px;
    height: 40px;

`

export const Title = styled.h3`
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.white};

`

export const MenuLinks = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;

`
export const LinkItem = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.info};
    transition: ease-in-out 0.3s;
    margin-left: 0.5rem;    

    span{
        margin-left: 0.3rem;
    }    

    & + a{
        margin-top: 1rem;
    }

    &:hover{
        opacity: .7;
    }

`



