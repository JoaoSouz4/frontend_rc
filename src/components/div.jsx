import styled from 'styled-components';

const Wrapper = styled.div`

    position: ${(props) => {return props.position}};
    top: ${(props) => {return props.top}};
    bottom: ${(props) => {return props.bottom}};
    left: ${(props) => {return props.left}};
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
    z-index: ${(props) => { return props.z}};
    background-color: ${(props) => {return props.bg}};
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