import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
    display: flex;
    flex-direction: ${(props) => {return props.flexDirection}};
    justify-content: ${(props) => {return props.jc}};
    gap: ${(props) => {return props.gap}};
    width: ${(props) => {return props.width}};
    max-width: ${(props) => {return props.maxWidth}};
    height: ${(props) => {return props.height}};
    align-items: ${(props) => {return props.alignItems}};
    overflow-x: ${(props) => {return props.overFlowX}};
    background-color: ${(props) => {return props.bgColor}};
    border-top: ${(props) => {return props.borderTop}};
    padding-top: ${(props) => {return props.padding}};
    flex-wrap: ${(props) => { return props.flexWrap}};
    color: ${(props) => { return props.color}};
    svg{
        font-size: 1.9rem;
        cursor: pointer;
    }

    label{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    label svg {
        font-size: 1.2rem
    }
`

export default Wrapper;