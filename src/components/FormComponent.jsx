import styled from 'styled-components';

const FormComponent = styled.form`
    width: 30rem;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 560px){
        width: 90vw;
    }
`

export default FormComponent;