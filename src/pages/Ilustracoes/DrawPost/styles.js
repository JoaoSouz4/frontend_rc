import styled from 'styled-components'

export const WrapperFixed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #01010166;
    z-index: 1;
`

export const DrawPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px rgb(70, 69, 69);
    width: 20rem;
    height: 100%;
    padding: 1.5rem;
    border-radius: 5px;
`

export const InformationsPost = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.4rem;
    label {
        color: var(--color-gray);
        text-transform: uppercase;
    }
`

export const TitleDraw = styled.h4`
    font-size: 1.3rem;
    text-align: center;
    width: 100%;
`