
import _default from '../../services/default.js'

//Context
import { DrawContext } from '../../context/AllDrawtContext.jsx';

//Hooks
import { useEffect, useRef, useState, useContext } from 'react';
import { createContext } from 'react';

//Components
import MainContainer from '../../components/mainContainer.jsx';
import Title from '../../components/Title.jsx';
import Wrapper from '../../components/div.jsx';
import { SliderComponent } from './SliderComponent';
import { AiOutlineInstagram } from "react-icons/ai";
import ButtonTransparent from '../../components/Button/buttonTransparent.jsx'
import { Spinner } from 'reactstrap';

export const DrawPostContext = createContext();

export const Ilustracoes = () => {
  
    const { tlouData, opData, mangaData, heroData } = useContext(DrawContext);
 
    return(
        <>
            <MainContainer>
                <Wrapper flexDirection = 'column' jc = 'center' width = '100%' alignItems = 'center'>
                    <Title color = 'var(--color-secundary)' size = '1.9rem'>Repositório de Ilustrações</Title>
                    <p>Acompanhe também em: </p>
                    <ButtonTransparent width = '300px '><AiOutlineInstagram/><a href="https://www.instagram.com/jv.art.0/" target='_blank'>@jv.art.0</a></ButtonTransparent>
                </Wrapper>

                <Wrapper flexDirection = 'column'>
                    <SliderComponent drawList = {tlouData}/>
                    <SliderComponent drawList = {opData}/> 
                    <SliderComponent drawList = {mangaData}/> 
                    <SliderComponent drawList = {heroData}/> 
                </Wrapper>
            </MainContainer>
        </>
    )}