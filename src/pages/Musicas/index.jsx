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
        {console.log(music)}
            <section className="container-apresentation">
                <h1>Reposiório de ilustrações</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro minus id veritatis est deserunt, distinctio ut amet ratione velit magnam quos sint aperiam eligendi maxime fugit quae, impedit magni.</p>
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