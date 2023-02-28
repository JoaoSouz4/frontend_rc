import { useEffect } from 'react';
import { useState } from 'react';
import { MusicPost } from '../../components/MusicPost';
import { BsHeadphones } from 'react-icons/bs';
import './styles.css'
export const Musicas = () => {
    const [ music, setMusic ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/show")
            .then(res => res.json())
            .then(res => setMusic(res.dataMusic));
    },[])
    return(
        
       <main className="main-container">
            <section className="section-one">
                <div className="description">
                    <h1>Repositório de Músicas</h1>
                    <p>Ouça algums curtas que fiz nos últimos 2 anos por puro Hobiey.</p>
                    <p>Utilizei o software BandLab para fazer as linhas de todos os instrumentos, e quando necessário, mesclar com gravações reais feitas em casa</p>
                </div>
                <div className="banner">
                    <BsHeadphones className = "phone-icon"/>
                    <p>Use <strong>fones</strong> para uma melhor experiência</p>
                </div>
            </section>

            <section className ="container-music">
                {music.map((music) => {
                    return <MusicPost 
                                      key = {music._id}
                                      title = {music.title}
                                      description  = {music.description}
                                      style = {music.style}
                                      tone = {music.tone}
                                      url = {music.url}/>
                })}
                
            </section>
       </main>
    )
}