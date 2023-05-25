import styled from 'styled-components'

export const Image = styled.img`
    opacity: 0;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    object-fit: cover;
    width: 100%;
    height: 100%;

    @keyframes animation {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

`
export const MockImage = styled.div`
    background-color: gray;
    width: 100%;
    height: 100%;
`