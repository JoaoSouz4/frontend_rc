import styled from "styled-components";
import Title from "../../components/Title";
import ButtonTransparent from "../../components/Button/buttonTransparent";
export const WrapperD = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    p{
        color: var(--color-gray)
    }

    @media screen and (max-width: 500px){
        ${Title}{
            text-align: center;
            width: 100%;
            font-size: 1.7rem;
        }

        ${ButtonTransparent}{
            width: 100%;
        }
    }
`