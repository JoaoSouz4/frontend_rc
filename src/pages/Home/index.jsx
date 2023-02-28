
import './styles.css'
import { GiGuitarHead } from 'react-icons/gi'
import { HiPencilAlt } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
import { BsHeadphones } from 'react-icons/bs';
import { Link } from 'react-router-dom';


export const Home = () => {
    return(
            <main className="main-container">

                <section className="section-one">

                    <div className='description'>
                        <h1>Meu repositório criativo</h1>
                        <p>
                            Bem vindo ao meu web site pessoal onde compartilho alguns dos frutos gerados a partir de meus hobbies, a ilustração e a música.
                            <br/>Ouça curtas de vários gêneros e artes inspiradas em quadrinhos e mangás.
                        </p>
                        <div className = "icons-decorations">
                            <GiGuitarHead className='icon'></GiGuitarHead>
                            <HiPencilAlt className='icon'></HiPencilAlt>
                            <FaPaintBrush className='icon'/>
                        </div>
                    </div>
                      
                    <div className="container-banner">
                        <img src = "http://localhost:3001/files/js.png"></img>
                    </div>
                    
                </section>

                <section className='section-two'>
                    <h2>O que deseja ver agora?</h2>

                    <div className='box-container'>
                        <div className='box'>
                            <h3>Ilustrações</h3>
                            <div>
                                <FaPaintBrush className='box-icon'/>
                            </div>
                            <p>
                                Ilustrações voltadas para a cultura pop, inpirado em obras do ocidente à oriente que adimiro e que contribuiram 
                                para a formação do meu traço. Coleção de ilustrações feitas a partir de 2021.
                            </p>
                            <Link to={'/Ilustracoes'} className="link-button"><button >Acessar</button></Link>
                        </div>
                        <div className='box'>
                            <h3>Músicas</h3>
                            <div>
                                <BsHeadphones className='box-icon'/>
                            </div>
                            <p>Sessão dedicada à curtas composições autorais que fiz ao longo da adolescencia utilizando o bandLab. Aqui você encontra uma 
                                mistura de gêneros como rock, punk, pop, neo soul entre outros </p>
                            <Link to={'/Musicas'} className="link-button"><button >Acessar</button></Link>
                        </div>
                    </div>
                </section>

            </main>
    )
}