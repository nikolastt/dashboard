import styled from 'styled-components';

interface IContainerProps{
    color:string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    padding: 10px 30px;
    border-radius: 0.5rem;
    position: relative;
    height: 100%;
    width: 32%;
    overflow: hidden;
    height: 200px;
    margin-bottom: 1.5rem;




    > img{
        position: absolute;
        top: -10px;
        right: -20px;
        opacity: .3;
        height: 110%;
    }

    > small {
        position: absolute;
        bottom: 10px;
    }

    > p {
        font-size: 18px;
        font-weight: 500;
    }



`;
