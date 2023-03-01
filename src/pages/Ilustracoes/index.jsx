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
            
            <IlustratorDescription/>
        {data.length <= 0 && <LoaderComponent/>}
        {data.length > 0 &&
        <>
            <section className="draw-container">
            <h2>Ilustrações</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] != "logo")
                            return <DrawPost
                                key = {item._id}
                                title = {item.title}
                                description = {item.description}
                                font = {item.font}
                                data = {item.data}
                                categories = {item.categories}
                                img  = {item.img[0]}
                                funcCallback = {handleOpen}
                                />  
                            })
                    }
                </div>
            </section>
            
            <section className="draw-container">
            <h2>Logos | Identidade Visual</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] == "logo")
                            return <LogoPost
                                key = {item._id}
                                title = {item.title}
                                description = {item.description}
                                font = {item.font}
                                data = {item.data}
                                categories = {item.categories}
                                img  = {item.img}
                                funcCallback = {handleOpen}
                                />
                        })
                    }                       
                </div>
            </section> 
            </> 
}      
         </main>
         </>
    )
}