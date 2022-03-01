import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  

  &::after{
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.lineColor};
    transition: ease-in-out 0.5s;
  }
`;

export const Title = styled.h1`
  transition: ease-in-out 0.5s;
  color: ${props => props.theme.colors.white}

  
`;

export const Controllers = styled.div`
  display: flex;
`;

