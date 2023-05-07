import { createContext } from 'react';

//Components
import Title from '../../../components/Title';
import { DrawPost } from '../DrawPost';
import WrapperSlide from '../../../components/WrapperSlider';
import Section from '../../../components/Section';
import ContainerWrapperSlide from '../WrapperContainerSlide';

export const PostContext = createContext();
export const SliderComponent = (props) => {

    const { drawList } = props;

   return(
        <>
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
        </>
)}