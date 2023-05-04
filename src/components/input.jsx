import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid var(--color-secundary);
    width: ${(props) => {return props.width}};
    padding: 0.8rem;
`

export default Input;
