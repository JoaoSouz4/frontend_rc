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
                        <a href='#'><AiOutlineInstagram/></a>
                        <a href='#'><AiFillLinkedin/></a>
                        <a href='#'><AiFillGithub/></a>
                    </div>
            </div>
        </footer>
    )
}