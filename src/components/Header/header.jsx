import styled from "styled-components";

const HeaderMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid  #b8b8b8;
    z-index: 1;
    @media ( max-width: 650px ){
        justify-content: space-between;
    }

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    div label {
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        font-weight: bold;
        color: rgb(32, 32, 32);
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        gap: 1.2rem;
        @media (max-width: 650px) {
        display: none;
        }
    }

    ul a{
        text-decoration: none;
        list-style: none;
        color: #3e3e3e;
    }

    div svg{

        display: none;
        @media( max-width: 650px){
            display: block;
            font-size: 1.5rem
        }
    }
`

export default HeaderMenu;