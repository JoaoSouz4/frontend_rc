
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --color-dark:  rgb(15, 163, 131);
        --color-primary:rgb(0, 255, 149);
        --color-secundary: rgb(8, 216, 171);
        --color-black: #393939;
        --color-gray: #a8a8a8;
    }  

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
        overflow-x: hidden;
}
`
export default GlobalStyles