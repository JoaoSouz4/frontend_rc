import styled from "styled-components";

export const HeaderMenu = styled.nav`
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
`

export const ListNav = styled.ul`
     
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

    a{
        font-family: raleway;
        color: var(--color-black);
        text-decoration: none;
        font-weight: 500;

        &:hover{
            color: var(--color-secundary);
        }
    }
` 
export const LogoArea = styled.div`
    
    display: flex;
    align-items: center;
    gap: 1rem;
    
    label {
        font-family: 'Dancing Script', cursive;
        font-size: 1.7rem;
        font-weight: bold;
        color: rgb(32, 32, 32);
    }
`

export const MenuBarIcon = styled.div`

    display: none;
    justify-content: center;
    align-items: center;
    
    @media( max-width: 650px){
        display: flex;
        font-size: 1.5rem
    }
`

export const HeaderMenuMobile = styled.nav`

    @keyframes open {
        to{
            transform: translateX(0); 
        }
    }

    @keyframes close {
        from {
            transform: translateX(0); 
        }
        to{
            animation-direction: reverse; 
        }
    }

    position: fixed;
    top: 5rem;
    left: 0;
    width: 60vw;
    height: 100%;
    transition: 0.3s ease;
    transform: translateX(-2500px);
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease ease-in-out;
    background-color: var(--color-black);
    box-shadow: 0px 4px 10px #000000aa;
    z-index: 50;

    ul{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
        gap: 3rem;
        height: 100%;
        width: 100%;
    }

    ul a{
        text-decoration: none;
        list-style: none;
        display: flex;
        align-items: center;
        border: 1px solid gray;
        border-radius: 0.3rem;
        width: 100%;
        padding: 1rem;
        gap: 2rem;
        color: white;
    }
`
