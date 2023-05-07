

import js from '../../assets/js.png'
import { useNavigate } from 'react-router-dom';

//Components
import Title from '../../components/Title';
import Button from '../../components/Button/button';
import SectionApresentation from './SectionApresentation';
import SocialMedias from './SocialMedia/SocialMedias';
import Banner from './Banner';
import Wrapper from '../../components/div';
import WrapperButton from './WrapperButton';


export const Home = () => {

    const navigate = useNavigate();
    return(
        <>  
            <SectionApresentation>

                <Wrapper flexDirection = "row" jc = 'space-around' width = '100%' flexWrap = 'wrap-reverse'>
                    <Wrapper gap = '0.5rem' flexDirection = "column" width = '100%' maxWidth = '400px' height = '100%'>
                        <Title size = '2.7rem' color = 'var(--color-secundary)'>Meu Repositório Crativo</Title>
                        <p>Bem vindo ao meu Site de divulgação das minhas ilustrações. Entre ou
                            Faça o cadastro para acessar funcionalidades <strong>exclusivas</strong> para usuários.
                        </p>
                        <WrapperButton gap = '3rem' flexDirection = 'row'>
                            <Button onClick = {() => navigate('/Login')}>Login</Button>
                            <Button onClick = {() => navigate('/Ilustracoes')}>Ver Ilustrações</Button>
                        </WrapperButton>     
                    </Wrapper>

                    <Banner maxWidth = '500px'>
                        <img src = {js} alt="" />
                    </Banner>

                </Wrapper>
              
                <SocialMedias />
                <span/>
            </SectionApresentation>

            {/* <MainContainer>
            </MainContainer> */}
        </>
    )
}