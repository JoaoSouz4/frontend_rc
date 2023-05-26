import styled from "styled-components";

export const Container = styled.div`

`

export const Wrapper = styled.div`
    margin-top: 7rem;
    margin-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 950px;
    position: ${(props) => { return props.position}};
    width: ${(props) => { return props.width}};
`