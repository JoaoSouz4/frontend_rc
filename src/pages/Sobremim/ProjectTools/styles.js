import styled from "styled-components";

export const ToolBox = styled.div`
    box-shadow: 1px 1px 3px black;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: 0.3s ease;
        box-shadow: 1px 1px 7px ${(props) => {return props.color}};
        color: ${(props) => {return props.color}};
    }
`

export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid gray;
    border-radius: 2rem;
    padding: 1rem;
`