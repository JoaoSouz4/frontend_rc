import styled from "styled-components";

export const SectionApresentation = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10px;

    p{
        font-size: 1.2rem;
        color: var(--color-black);
    }

    span{ 
        position: absolute;
        bottom: 0;
        border-bottom: 6rem solid var(--color-primary);
        border-left: 100vw solid transparent;
        z-index: -1;
        width: 100%;
    }

    @media screen and(max-width: 760px) {
        p{
            font-size: 1rem;
        }
    }
`

export const Banner = styled.div`
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

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media screen and (max-width: 400px){
        flex-direction: column;
    }
`