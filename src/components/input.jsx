import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid var(--color-secundary);
    width: ${(props) => {return props.width}};
    padding: 0.8rem;
    border-radius: 0.8rem;

    &:focus{
        transition: 0.3s ease-in-out;
        outline: 1px solid var(--color-secundary);
    }
`

export default Input;
