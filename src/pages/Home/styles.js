import styled from "styled-components";

export const SectionApresentation = styled.section`
    width: 75vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10px;
    position: relative;
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100%;
    max-width: ${(props) => {return props.maxWidth}};

    img{
        object-fit: cover;
        width: 100%;
    }

    @media screen and (max-width: 935px){
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

export const AbsoluteWrapper = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 3rem;

    div svg{
        color: var(--color-black);
        cursor: pointer;
    }
`

export const Container = styled.div`
    width: 100vw;
`

export const SocialMedia = styled.div`
    svg{
        color: var(--color-black);
    }
`