import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #hoot {
        height: 100%;        
    }

    *, button, input {
        border: none;
        outline: none;
        font-family: 'Roboto', sans-serif; 
    }
    button{
        cursor: pointer;
    }

`
