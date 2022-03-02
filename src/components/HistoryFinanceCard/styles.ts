import styled from 'styled-components';

interface ICardColorProps {
    cardColor: string;
}

interface ITagColorProps {
   tagColor: string;
}

export const Container = styled.li<ICardColorProps>`

    display: flex;
    justify-content: space-between;
    transition: ease-in-out 0.2s;    
    background-color: ${props => props.cardColor};
    padding: 0.5rem;
    border-radius: 0.5rem;
    align-items: center;
    margin-top: 1rem;
    position: relative;

    &:hover{
        transition: all 0.2s;
        opacity: 0.7;
        transform: translateX(10px);
    }
  
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
  
`;

export const Tag = styled.div<ITagColorProps>`
    position: absolute;
    width: 10px;
    height: 60%;
    transition: ease-in-out 0.5s;
    background-color: ${props => props.tagColor};
    left: 0;
    border-radius: 0.1rem;   
`;


export const Title = styled.h4`
color: ${props => props.theme.colors.white};
transition: ease-in-out 0.5s;
  
`;


export const SubTitle = styled.small`
  color: ${props => props.theme.colors.white};
  transition: ease-in-out 0.5s;
`;


export const Amount = styled.h3`
  color: ${props => props.theme.colors.white};
  transition: ease-in-out 0.5s;
`;


