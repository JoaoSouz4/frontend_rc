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
            <h2>The Last Of Us</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] == "tlou")
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
            <h2>One Piece</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] == "One Piece")
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
            <h2>Marvel & Dc</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] == "marvel" || item.categories[0] == "dc"  )
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
            <h2>Outros</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] != "marvel" && item.categories[0] != "dc" && item.categories[0] != "tlou" && item.categories[0] != "One Piece" && item.categories[0] != "logo"   )
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
            <h2>Marvel & Dc</h2>
                <div className="all-gruop">
                    {
                        data.map(item => {
                            if(item.categories[0] == "marvel" || item.categories[0] == "dc"  )
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