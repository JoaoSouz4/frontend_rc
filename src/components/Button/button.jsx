import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => {return props.width}};
    border-radius: 0.3rem;
    outline: none;
    border: none;
    background: linear-gradient(
            to right,
            var(--color-primary),
            var(--color-secundary) 
    );
    border: 1px solid var(--color-secundary);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem;

    &:hover{
        background: transparent;
        color: var(--color-secundary);
        cursor: pointer;
        transition: 0.3s ease;
    }
`
export default Button