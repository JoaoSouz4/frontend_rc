import { createContext, useState, useEffect } from 'react';

//Components
import Title from '../../../components/Title';
import { DrawPost } from '../DrawPost';
import WrapperSlide from '../../../components/WrapperSlider';
import Section from '../../../components/Section';
import { ContainerWrapperSlide } from '../styles';
import { Spinner } from 'reactstrap';

export const PostContext = createContext();
export const SliderComponent = (props) => {

    const [drawList, setDrawList ] = useState(props.drawList);

    useEffect(() => {
        setDrawList(props.drawList)
    }, [])

   return(
        <>
        {!drawList.length   ? <Spinner/>
        :<Section>
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