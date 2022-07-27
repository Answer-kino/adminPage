import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }: any) => theme.bg2};
        color: ${({ theme }: any) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`;
