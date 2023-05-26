import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2.5rem;

    @media screen and (max-width: 750px) {
        flex-direction: column
    }
`
export const Aside = styled.aside`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1rem;
    width: 100%;


    img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid var(--color-secundary);
    }

    label{
        text-align: center;
    }
`

export const Contact = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul{
        display: grid;
        margin-top: 1rem;
        grid-template-columns: 40px 40px;
        grid-template-rows: 40px 40px;
        grid-gap: 0.2rem;
        padding: 0px;
    }

`
export const LinkSocialMedia = styled.div`

    a{
        background-color: ${(props) => { return props.color}};
        width:2.5rem;
        height: 2.5rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    svg {
        color: #fafafa;
    }
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const Name = styled.h4`
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
`