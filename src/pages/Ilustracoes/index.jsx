import './styles.css'

import { Children, useEffect, useRef } from 'react';
import { useState } from 'react'

import { DrawPost } from '../../components/DrawPost';
import { LogoPost } from '../../components/LogoPost';
import { IlustratorDescription } from '../../components/IlustratorDescription';
import { MoreDetails } from '../../components/MoreDetails';
import { LoaderComponent } from '../../components/LoaderComponent';


export const Ilustracoes = () => {

    const [data, setData] = useState([]);
    const [dataMd, setDataMd] = useState("");
    const moreDetails = useRef("");

    const handleOpen = async (res, dataDraw) => {
        await setDataMd(dataDraw)
        moreDetails.current.style.display = res;
    }
    const  handleClose = (res) => {
        moreDetails.current.style.display = res;
    }

    useEffect(()=>{
        fetch("https://api-draw-rc.onrender.com/show").then(res => res.json()).then(res => setData(res.data));
    }, [])

    return(
        <>
         <main className= "main-container">

            <div className='container-md' ref={moreDetails}>
                <MoreDetails funcCallback = {handleClose}  dataToMd = {dataMd}/>
            </div>
             Em manutenção
             (Desde 19/03/2023)
         </main>
         </>
    )
}