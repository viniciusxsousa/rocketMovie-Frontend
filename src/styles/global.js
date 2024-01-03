import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-color: ${({theme}) => theme.COLORS.PINK} transparent;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 8px;
    }



    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        color: ${({theme}) => theme.COLORS.WHITE_300};
    }

    a, body, button, input, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    } 

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

`