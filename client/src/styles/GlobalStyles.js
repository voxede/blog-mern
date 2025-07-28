import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main};
        background: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.dark}
        line-height: 1.5
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyles