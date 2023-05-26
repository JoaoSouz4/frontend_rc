import { createContext, useState, useEffect } from 'react';

//Components
import Title from '../../../components/Title';
import { DrawPost } from '../DrawPost';
import {Section, WrapperSlide, ContainerWrapperSlide} from './styles';
import { Spinner } from 'reactstrap';
import Wrapper from '../../../components/div';

export const PostContext = createContext();
export const SliderComponent = (props) => {

   const [drawList, setDrawList ] = useState(props.drawList);

   useEffect( () => {
    setDrawList(props.drawList)
   }, [props])
   return(
        <>
        {!drawList ? 
            <Wrapper jc = 'center' alignItems = 'center' width = '100%' height = '60vh'>
                <Spinner type = 'grow'/>
            </Wrapper>
        :
            <Section>
                <Title color ='var(--color-secundary)' size = '1.5rem'>-{drawList[0].section}</Title>
                    <ContainerWrapperSlide>
                        <WrapperSlide>
                            {
                                drawList.map( d => {
                                    return <PostContext.Provider key = {d._id} value = {d}>
                                                <DrawPost/>
                                            </PostContext.Provider>
                                })
                        }
                        </WrapperSlide>
                    </ContainerWrapperSlide>
            </Section>
        }
        </>
)}