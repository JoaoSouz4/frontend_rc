import { useEffect } from 'react';
import { useState } from 'react';
import { MusicPost } from '../../components/MusicPost';
export const Musicas = () => {
    const [ music, setMusic ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/show")
            .then(res => res.json())
            .then(res => setMusic(res.dataMusic));
    },[])
    return(
        
       <main className="main-container">
            <section className="container-apresentation">
                <h1>Reposiório de ilustrações</h1>
                <p>Ouça algums curtas que fiz nos últimos 2 anos por puro Hobiy.</p>
            </section>

            <section className ="container-music">
                {music.map((music) => {
                    return <MusicPost title = {music.title}
                                      description  = {music.description}
                                      style = {music.style}
                                      tone = {music.tone}
                                      url = {music.url}/>
                })}
                
            </section>
       </main>
    )
}