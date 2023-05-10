import styled from 'styled-components';

const WrapperAlert = styled.div`
    position: ${(props) => {return props.position}};
    top: ${(props) => {return props.top}};
    bottom: ${(props) => {return props.bottom}};
    left: ${(props) => {return props.left}};
    display: none;
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
`

export default WrapperAlert;