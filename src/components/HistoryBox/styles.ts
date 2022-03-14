import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    margin-top: 1.5rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    padding: 30px 20px;
    border-radius: 0.5rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px; 
    margin-bottom: 1.5rem;
;
`

export const Title = styled.h3`


`


export const ChartContainer = styled.div`
    
    height: 300px;
`