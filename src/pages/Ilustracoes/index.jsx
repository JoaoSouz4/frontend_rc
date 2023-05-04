
import _default from '../../config/default.js'
import { useEffect, useRef, useState, useContext } from 'react';
import { DrawContext } from '../../context/postContext';
import MainContainer from '../../components/MainContainer/mainContainer.jsx';
import Title from '../../components/Title/Title.jsx';
import Wrapper from '../../components/div.jsx';
import { LoaderComponent } from '../../components/LoaderComponent';
import { SliderComponent } from './SliderComponent';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineInstagram } from "react-icons/ai";
import ButtonTransparent from '../../components/Button/buttonTransparent.jsx'
import { createContext } from 'react';

export const DrawPostContext = createContext();

export const Ilustracoes = () => {
  
    const { tlouData, opData, mangaData, heroData } = useContext(DrawContext);
    const [tlou, setTlou] = useState();
    const [op, setOp] = useState();
    const [manga, setManga] = useState();
    const [hero, setHero] = useState();

    useEffect( () => {
        setTlou(tlouData);
        setOp(opData);
        setManga(mangaData);
        setHero(heroData);
    }, []);

    return(
        <>
           
            <MainContainer>
                <Wrapper flexDirection = 'column' jc = 'center' width = '100%' alignItems = 'center'>
                    <Title color = 'var(--color-secundary)' size = '1.9rem'>Repositório de Ilustrações</Title>
                    <p>Acompanhe também em: </p>
                    <ButtonTransparent width = '300px '><AiOutlineInstagram/>@jv.art.0</ButtonTransparent>
                </Wrapper>

                <Wrapper flexDirection = 'column'>
                    {!tlou ? <LoaderComponent/> : <SliderComponent drawList = {tlou}/>}
                    {/* {!op ? <LoaderComponent/> : <SliderComponent drawList = {op}/>}
                    {!manga ? <LoaderComponent/> : <SliderComponent drawList = {manga}/>}
                    {!hero ? <LoaderComponent/> : <SliderComponent drawList = {hero}/>} */}
                </Wrapper>
            </MainContainer>
        </>
    )}