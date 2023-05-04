import styled from 'styled-components'

const ContainerWrapperSlide = styled.div`

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

export default ContainerWrapperSlide;