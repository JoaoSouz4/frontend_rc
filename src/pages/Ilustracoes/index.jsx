import './styles.css'

import { useEffect, useRef } from 'react';
import { useState } from 'react'

import { DrawPost } from '../../components/DrawPost';
import { MoreDetails } from '../../components/MoreDetails';
import { LoaderComponent } from '../../components/LoaderComponent';
import { AiOutlineInstagram } from "react-icons/ai";
import { SliderComponent } from '../../components/SliderComponent';

import { Fade } from 'react-awesome-reveal';

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
         <main className= "main-container-ilustration">

            <div className='container-md' ref={moreDetails}>
                <MoreDetails funcCallback = {handleClose}  dataToMd = {dataMd}/>
            </div>
             
             <section className="section-apresentation">
                <div className="title-and-desc">
                    <h1>Repositório de Ilustrações</h1>
                    <p>Acompanhe também em: </p>
                    <button className = "btn-acess-instagram">
                        <AiOutlineInstagram id = 'insta-icon'/>
                        <a href = 'https://www.instagram.com/jv.art.0/' target={'_blank'}>@jv.art.0</a>
                    </button>
                </div>
             </section>
             {data.length <=0 && <LoaderComponent/>}
             {data.length > 0 && 
                 <section className="all-drawings">
                    <Fade>
                    <section className = "section-title-and-slide">
                        <h2>The Last of</h2>
                        <SliderComponent>
                            {data.map( item => {
                                if(item.categories[0] == 'tlou'){
                                    return <DrawPost
                                        key = { item._id}
                                        title = { item.title}
                                        description = {item.description}
                                        font = {item.font}
                                        data = {item.data}
                                        img = {item.img[0]}
                                        funcCallback = {handleOpen}
                                    />
                                }
                            })}
                        </SliderComponent>
                    </section>
                    </Fade>
                <Fade>
                <section className = "section-title-and-slide">
                    <h2>One Piece</h2>
                    <SliderComponent>
                        {data.map( item => {
                            if(item.categories[0] == 'One Piece'){
                                return <DrawPost
                                    key = { item._id} 
                                    title = { item.title}
                                    description = {item.description}
                                    font = {item.font}
                                    data = {item.data}
                                    img = {item.img[0]}
                                    funcCallback = {handleOpen}
                                />
                            }
                        })}
                    </SliderComponent>
                </section>
                </Fade>
                <Fade>
                <section className = "section-title-and-slide">
                    <h2>Marvel e Dc</h2>
                    <SliderComponent>
                        {data.map( item => {
                            if(item.categories[0] == 'marvel' || item.categories[0] == 'dc'){
                                return <DrawPost
                                    key = { item._id} 
                                    title = { item.title}
                                    description = {item.description}
                                    font = {item.font}
                                    data = {item.data}
                                    img = {item.img[0]}
                                    funcCallback = {handleOpen}
                                />
                            }
                        })}
                    </SliderComponent> 
                </section>
                </Fade>
                <Fade>
                <section className = "section-title-and-slide">
                    <h2>Outros</h2>
                    <SliderComponent>
                        {data.map( item => {
                            if(item.categories[0] != 'tlou' && item.categories[0] != 'marvel' && item.categories[0] != 'dc' && item.categories[0] != 'One Piece' ){
                                return <DrawPost
                                    key = { item._id} 
                                    title = { item.title}
                                    description = {item.description}
                                    font = {item.font}
                                    data = {item.data}
                                    img = {item.img[0]}
                                    funcCallback = {handleOpen}
                                />
                            }
                        })}
                    </SliderComponent> 
                </section>
                </Fade>
            </section>
            }
        </main>
    </>)}