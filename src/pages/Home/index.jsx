import './mediaScreen.css'
import './styles.css'
import { GiGuitarHead } from 'react-icons/gi'
import { HiPencilAlt } from "react-icons/hi";
import { FaPaintBrush } from "react-icons/fa";
export const Home = () => {
    return(
            <main className="container">

                <section className="cabecalho">

                    <div className='description'>
                        <h1>Meu repositório criativo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cupiditate in, quam autem voluptatibus at delectus veritatis,
                        laborum, sapiente recusandae dolorum provident nam corrupti quia est eveniet earum adipisci. Fugiat.
                        </p>
                        <div className = "icons-decorations">
                            <GiGuitarHead className='icon'></GiGuitarHead>
                            <HiPencilAlt className='icon'></HiPencilAlt>
                            <FaPaintBrush className='icon'/>
                        </div>
                    </div>
                    <div className = "carrosel">
                        Imagens
                    </div>
                </section>

                <section className='section-two'>
                    <h2>O que deseja ver agora?</h2>

                    <div className='box-container'>
                        <div className='box'>
                            <h3>Ilustrações</h3>
                            <div></div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, corrupti ab labore, sadadsad</p>
                            <button>Acessar</button>
                        </div>
                        <div className='box'>
                            <h3>Músicas</h3>
                            <div></div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, corrupti ab labore, sadadsad</p>
                            <button>Acessar</button>
                        </div>
                    </div>
                </section>

            </main>
    )
}