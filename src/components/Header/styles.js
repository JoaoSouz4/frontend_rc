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
