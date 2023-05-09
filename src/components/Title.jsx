import styled from 'styled-components';

const Title = styled.h2`
    color: ${(props) => {
        return props.color
    }};
    font-size: ${(props => props.size)};
    text-align: ${(props) => props.align};

    @media screen and (max-width: 380px){
        font-size: 2rem;
    }
`
export default Title;