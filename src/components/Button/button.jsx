import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => {return props.width}};
    border-radius: 0.3rem;
    outline: none;
    border: none;
    background: transparent;
    border: 1px solid var(--color-secundary);
    color: var(--color-secundary);
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem;

    &:hover{
       
        background: linear-gradient(
            to right,
            var(--color-primary),
            var(--color-secundary) 
        );
        color: white;
        cursor: pointer;
        transition: 0.3s ease;
    }
`
export default Button