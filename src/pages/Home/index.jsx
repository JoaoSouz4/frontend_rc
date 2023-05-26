

import js from '../../assets/js.png'
import { useNavigate } from 'react-router-dom';

//Components
import Title from '../../components/Title';
import Button from '../../components/Button/button';
import Wrapper from '../../components/div';
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { WrapperButton, Banner, SectionApresentation, SocialMedia} from './styles.js';
import Text from '../../components/Text'

export const Home = () => {

    const navigate = useNavigate();
    return(
        
            <SectionApresentation>
                <Wrapper flexDirection = "row" jc = 'space-around' width = '100%' flexWrap = 'wrap-reverse'>

                    <Wrapper gap = '0.5rem' flexDirection = "column" width = '100%' maxWidth = '400px' height = '100%'>
                        <Title size = '2.7rem' color = 'var(--color-secundary)'>Meu Repositório Crativo</Title>
                        <Text>
                            Bem vindo ao meu Site de divulgação das minhas ilustrações. Entre ou
                            Faça o cadastro para acessar funcionalidades <strong>exclusivas</strong> para usuários.
                        </Text>
                        <WrapperButton gap = '3rem' flexDirection = 'row'>
                            <Button onClick = {() => navigate('/Login')}>Login</Button>
                            <Button onClick = {() => navigate('/Ilustracoes')}>Ver Ilustrações</Button>
                        </WrapperButton>

                        <Wrapper gap = "3rem" bottom = '2rem' position = 'absolute'>
                            <SocialMedia><a href='https://www.instagram.com/jv.art.0/' target='_blank'> <AiOutlineInstagram/></a></SocialMedia>
                            <SocialMedia><a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/' target='_blank'><AiFillLinkedin/></a></SocialMedia>
                            <SocialMedia><a href='https://github.com/JoaoSouz4' target='_blank'><AiFillGithub/></a></SocialMedia>
                        </Wrapper>  
                    </Wrapper>

                    <Banner maxWidth = '500px'>
                        <img src = {js} alt="" />
                    </Banner>

                </Wrapper>
            </SectionApresentation>
          
    )
}