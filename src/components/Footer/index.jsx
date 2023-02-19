import './styles.css'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return(
        <footer>
            <div className='informations'>
                <label>Desenvolvido: por João Souza</label>
                <div>
                    <a href='#'><AiOutlineInstagram/></a>
                    <a href='#'><AiFillLinkedin/></a>
                    <a href='#'><AiFillGithub/></a>
                </div>
            </div>
        </footer>
    )
}