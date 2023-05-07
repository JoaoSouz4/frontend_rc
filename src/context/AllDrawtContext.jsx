import React from "react";
import { createContext, useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import Wrapper from "../components/div";
import _default from "../config/default";

export const DrawContext = createContext();

 function DrawProvider({children}) {
    const [ tlouData, setTlouData ] = useState();
    const [ opData, setOpData ] = useState();
    const [ mangaData, setMangaData ] = useState();
    const [ heroData, setHeroData] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{

        async function getDatas(){
            await fetch(`${_default.urlApi}/getdraws/The Last Of Us`)
                .then(res => res.json())
                .then(res => {setTlouData(res.draw)});

            await fetch(`${_default.urlApi}/getdraws/One Piece`)
                .then(res => res.json())
                .then(res => {setOpData(res.draw);});

            await fetch(`${_default.urlApi}/getdraws/Manga`)
                .then(res => res.json())
                .then(res => {setMangaData(res.draw);});

            await fetch(`${_default.urlApi}/getdraws/Hero`)
                .then(res => res.json())
                .then(res => {
                    setHeroData(res.draw);
                    setLoading(false);
                });
            }
        getDatas()
    }, []);

    if (loading) {
        return <Wrapper height = '100vh' width = '100vw' jc = 'center' alignItems = 'center' flexDirection = 'column' gap = '1rem'>
                    <Spinner color = 'secundary' type = 'grow'/>
                    Carregando desenhos...
                </Wrapper>
    }

    return (
        <DrawContext.Provider value={{tlouData, opData, mangaData, heroData}}>
            {children}
        </DrawContext.Provider>
    )
}

export { DrawProvider };

