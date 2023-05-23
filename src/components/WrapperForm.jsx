import styled from 'styled-components'

const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: ${(props) => { return props.position}};

    label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
    }

    label div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
    }
`

export default WrapperForm;