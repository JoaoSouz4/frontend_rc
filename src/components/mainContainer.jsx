import styled from "styled-components";

const MainContainer = styled.main`
    margin-top: 7rem;
    margin-bottom: 7rem;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 950px;
    position: ${(props) => { return props.position}};
    width: ${(props) => { return props.width}};
`

export default MainContainer;