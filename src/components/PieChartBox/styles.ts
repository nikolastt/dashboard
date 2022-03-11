import styled from 'styled-components';

interface IBoxLegendProps {
  color:string;
}

export const Container = styled.div`
  width: 48%;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.5rem;
  padding: 30px 20px;
  max-height: 250px;
  overflow: hidden;
  display: flex;
`;


export const SideLeft = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
`;

export const  Title = styled.h2``;


export const  LegendContainer = styled.div`    
    height:80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;

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


export const  Legend = styled.div`
    display: flex;
    align-items: center;
`;


export const TitleLegend = styled.p`
    margin-left: 0.5rem;
`;


export const BoxLegend = styled.div<IBoxLegendProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height:45px;
    background-color: ${props => props.color};
    border-radius: 0.5rem; 
    margin-bottom: 0.5rem;
    font-weight: 500;
`;


export const SideRight = styled.div`

width: 70%;
height: 100%;
`;
