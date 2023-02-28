import './styles.css'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                
                    <div className='credits'>
                        <label id='name'>Meu Repositório Criativo &copy; </label>
                        <label id='finesh'>Fervereiro de 2023</label>
                    </div>
                    <label id='author'>Desenvolvido por: <strong>João Souza</strong></label>
                    <div className='links'>
                        <a href='https://www.instagram.com/jv.art.0/'><AiOutlineInstagram/></a>
                        <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/'><AiFillLinkedin/></a>
                        <a href='https://github.com/JoaoSouz4'><AiFillGithub/></a>
                    </div>
            </div>
        </footer>
    )
}