import styled from 'styled-components';

export const Container = styled.div`    

  
`;

export const Content = styled.div`
  
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;  

  button{      
      background-color: transparent;
      font-size: 18px;
      font-weight: 500;      
      color: ${props => props.theme.colors.white};
      margin: 0 0.5rem;      
      transition: ease-in-out 0.5s;
      opacity: .2;
      
      &:hover{
          transition: opacity 0.2s;
          opacity: .7;
      }
    }

    .tag-filter-eventual::after{
        content: "";
        display: block;
        width: 55px;
        margin: 0 auto;
        transition: ease-in-out 0.5s;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }

    .tag-filter-recurrent::after{
        content: "";
        display: block;
        width: 55px;
        margin: 0 auto;
        transition: ease-in-out 0.5s;
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }

    .tag-active{
        opacity: 1;
    }

    
`;