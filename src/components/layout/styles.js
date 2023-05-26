import styled from "styled-components";

export const Container = styled.div`

`

export const Wrapper = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    position: ${(props) => { return props.position}};
    width: ${(props) => { return props.width}};
`