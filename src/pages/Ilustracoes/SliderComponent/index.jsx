
import Title from '../../../components/Title/Title';
import { DrawPost } from '../DrawPost';
import WrapperSlide from '../../../components/WrapperSlider';
import Section from '../../../components/Section';
import ContainerWrapperSlide from '../WrapperContainerSlide';
import { DrawPostContext } from '..';
import { useContext } from 'react';
import { createContext } from 'react';

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
                            return <PostContext.Provider value = {d}>
                                        <DrawPost/>
                                    </PostContext.Provider>
                        })
                    }
                </WrapperSlide>
            </ContainerWrapperSlide>
        </Section>
        </>
)}