import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        background-color: #fff;
        font-size: 10px;
        margin: 0;
    }
    ul, li {
        margin: 0;
        padding: 0;
    }

`

export default GlobalStyles;