import { useEffect } from 'react';
import { useState } from 'react'

import { DrawPost } from '../../components/DrawPost';
import { BsArrowRightShort } from 'react-icons/bs';
import './styles.css'
import { IlustratorDescription } from '../../components/IlustratorDescription';
export const Ilustracoes = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/show",).then(res => res.json()).then(res => setData(res.data));
    }, [])
    return(
        
         <main className= "container">
            
            <IlustratorDescription/>

            <section className="draw-container">
                <h2>Todos os Desenhos</h2>
                <div className="all-gruop">
                    {data.map(item => {
                        return <DrawPost
                            key = {item._id}
                            title = {item.title}
                            description = {item.description}
                            font = {item.font}
                            data = {item.data}
                            categories = {item.categories}
                            img  = {item.img}
                            />
                        })}
                </div>
            </section>
         </main>
    )
}