import styled from "styled-components";

const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 30%;
    max-width: ${(props) => {return props.maxWidth}};

    img{
        object-fit: cover;
        width: 100%;
    }

    @media screen and (max-width: 800px){
        display: none;
    }
`

export default Banner;