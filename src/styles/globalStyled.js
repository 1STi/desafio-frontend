import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body{
        color: ${props => props.theme.colors.text};
        font-family: "Open Sans";
        background: rgb(2, 0, 36);
        background: linear-gradient(
            180deg,
            ${props => props.theme.colors.primary} 0%,
            ${props => props.theme.colors.secondary} 100%
        );
    }

    body, html, #root{
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    @media (max-width: 360px){        
        .only-desktop{
            display: none;
        }
    }

`;
