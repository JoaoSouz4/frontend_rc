import './styles.css';
 import { AiOutlineInstagram } from 'react-icons/ai'
export const IlustratorDescription  = () => {
    return (
        <section className = "section-apresentation desc-ilustration-container">
                <div>
                    <h1> Repositório de Ilustrações</h1>
                    <p>Acompanhe também meu progresso em:</p>
                    <button className = 'btn-instagram-link'><AiOutlineInstagram id = 'insta-icon-btn-link'/><a href="https://www.instagram.com/jv.art.0/" target={'_blank'}>@jv.art.0</a> </button>
                </div>
        </section>
    )
}