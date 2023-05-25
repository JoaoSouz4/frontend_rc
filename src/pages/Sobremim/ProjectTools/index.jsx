

import { DiReact } from 'react-icons/di'
import {SiExpress } from 'react-icons/si'
import { GrNode} from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3} from 'react-icons/di' 
import { DiMongodb } from 'react-icons/di'
import { useRef, useState } from 'react';
import Title from '../../../components/Title';
import Wrapper from '../../../components/div';
import { ToolBox, ContainerBox }from './styles.js';
import { ToolList } from './data';
import Text from '../../../components/Text'

export const ProjectTools = () => {
    const [description, setDescription] = useState({
        title: '',
        body: '',
    });
    const descRef = useRef();

    const handleDescription = (obj) => {
        setDescription({
            title: obj.title,
            body: obj.body
        });
        descRef.current.style.display = "block"
    }
    return(
        <Wrapper flexDirection = 'column' jc = 'space-around' gap = '2rem'>

            <Title color = 'var(--color-secundary)'>Ferramentas utilizadas</Title>

            <ContainerBox jc = 'space-around'>

                <ToolBox color = 'rgb(27, 213, 43)' onClick = { () => handleDescription(ToolList[0])}>
                    <DiReact/>
                </ToolBox>

                <ToolBox color = 'rgb(205, 235, 16)'>
                    <DiJavascript1 onClick = {() => handleDescription(ToolList[1])}/>
                </ToolBox>

                <ToolBox color = 'rgb(16, 85, 235)' onClick={()=> handleDescription(ToolList[2])}>
                    <DiCss3/>
                </ToolBox>

                <ToolBox color = 'rgb(49, 178, 13)' onClick = {() => handleDescription(ToolList[3])}>
                    <DiMongodb/>
                </ToolBox>

                <ToolBox color = 'rgb(27, 213, 43)' onClick = {(e) =>handleDescription(ToolList[4])}>
                    <GrNode/>
                </ToolBox>

            </ContainerBox>

            <div ref={descRef}>
                <h5>{description.title}</h5>
                <Text>{description.body}</Text>
            </div>

        </Wrapper>
    )
}