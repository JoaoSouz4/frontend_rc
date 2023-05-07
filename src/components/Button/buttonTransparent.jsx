import styled from 'styled-components';

const ButtonTransparent = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: ${ props => {return props.width}};
    padding: 0.8rem;
    outline: none;
    border: none;
    background-color: transparent;
    border: 2px solid var(--color-black);
    color: var(--color-black);
    font-size: 1rem;

    &:hover{
        cursor: pointer;  
    }

    a{
        color: var(--color-black);
        text-decoration: none
    }
`
export default ButtonTransparent;