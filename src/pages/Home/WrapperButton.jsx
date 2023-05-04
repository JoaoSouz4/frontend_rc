import styled from 'styled-components';

const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`
export default WrapperButton;