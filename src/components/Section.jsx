import styled from 'styled-components'

const Section = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: ${(props) => {return props.alignItems}};
   width: 100%;
   @media screen and (max-width: 855px) {
      width: 80vw;
   }
`

export default Section;