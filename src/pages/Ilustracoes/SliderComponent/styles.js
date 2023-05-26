import styled from "styled-components";
import Title from "../../../components/Title";

export const Section = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: ${(props) => {return props.alignItems}};
   width: 100%;
   @media screen and (max-width: 855px) {
      width: 80vw;
   }

   ${Title}{
    font-size: 1.4rem;
   }
`

export const WrapperSlide = styled.div`
    height: 95%;
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;

`

export const ContainerWrapperSlide = styled.div`

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 80%;
    overflow-x: scroll;
    padding: 0.3rem;

    ::-webkit-scrollbar{
    border-radius: 20px;
    border: 1.3px solid rgb(173, 172, 172);
    }
    ::-webkit-scrollbar-thumb{
      background-color:rgb(5, 233, 176);
      border-radius: 15px;
    }
`