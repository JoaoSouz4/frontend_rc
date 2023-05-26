import styled from "styled-components";


export const DropDownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 1rem;

    label{
        border: 1px solid var(--color-gray);
        border-radius: 0.5rem;
        padding: 0.5rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        
    }
    
    @media( max-width: 650px){
        display: none;
    }

    button{
        background-color: var(--color-secundary);
        border: 1px solid var(--color-dark);
        border-radius: 0.5rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        &:hover{
            transition: 0.3s ease;
            background-color: var(--color-dark);
        }

        svg{
            font-size: 1.2rem;
        }
    } 
`

export const List = styled.ul`

    @keyframes animation {
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }

    display: none;
    flex-direction: column;
    width: 120%;
    margin: 0;
    padding: 0;
    border: 1px solid var(--color-gray);
    border-radius: 0.3rem;
    background-color: #fafafa;
    gap: 0.2rem;
    position: absolute;
    left: 0;
    top: calc(100% + .40rem);
    box-shadow: 0 2px 5px 0 rgb(0,0,0, .3);
    opacity: 0;
    transform: translateY(10px);
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    a{
        color: var(--color-black);
        text-decoration: none;
    }
`

export const Item = styled.li`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0.5rem;

    &:hover{
        transition: 0.3s ease;
        background-color: #d7d7d7;
        color: var(--color-black);
        cursor: pointer;
    }

    
`
export const ItemDivisor = styled.hr`
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;

`