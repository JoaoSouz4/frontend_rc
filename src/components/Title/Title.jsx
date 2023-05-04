import styled from 'styled-components';

const Title = styled.h2`
    color: ${(props) => {
        return props.color
    }};
    font-size: ${(props => props.size)};
    text-align: ${(props) => props.align};
`
export default Title;