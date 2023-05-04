import React from "react";
import { createContext, useState, useEffect } from "react";
import { LoaderComponent } from "../components/LoaderComponent";
import _default from "../config/default";

export const DrawContext = createContext();

 function DrawProvider({children}) {
    const [ tlouData, setTlouData ] = useState();
    const [ opData, setOpData ] = useState();
    const [ mangaData, setMangaData ] = useState();
    const [ heroData, setHeroData] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{

        fetch(`${_default.urlApi}/getdraws/The Last Of Us`)
            .then(res => res.json())
            .then(res => {setTlouData(res.draw)});

        fetch(`${_default.urlApi}/getdraws/One Piece`)
            .then(res => res.json())
            .then(res => {setOpData(res.draw);});

        fetch(`${_default.urlApi}/getdraws/Manga`)
            .then(res => res.json())
            .then(res => {setMangaData(res.draw);});

        fetch(`${_default.urlApi}/getdraws/Hero`)
            .then(res => res.json())
            .then(res => {
                setHeroData(res.draw);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoaderComponent/>
    }

    return (
        <DrawContext.Provider value={{tlouData, opData, mangaData, heroData}}>
            {children}
        </DrawContext.Provider>
    )
}

export { DrawProvider };

