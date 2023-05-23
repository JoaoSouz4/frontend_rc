import styled from "styled-components";

const HeaderMenuMobile = styled.nav`

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

export default HeaderMenuMobile;