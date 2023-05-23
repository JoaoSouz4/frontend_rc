import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    background-color: var(--color-secundary);
    padding: 2rem;
`

export const Label = styled.label`
    font-size: ${(props) => { return props.fontSize}};
`