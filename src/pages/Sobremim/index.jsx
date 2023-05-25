
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ProjectTools } from './ProjectTools';
import MainContainer from '../../components/mainContainer';
import foto from '../../assets/foto_social].jpeg'
import { Aside, Contact, LinkSocialMedia, TextBox, Name, Container} from './styles.js';
import Wrapper from '../../components/div'
import Title from '../../components/Title';
import Text from "../../components/Text";
export const Sobremim = () => {
    return(
        <MainContainer>

            <Container>
                <Aside>
                    <Wrapper jc = 'center'  alignItems = 'center' flexDirection= 'column' gap = '1.3rem'>
                        <img src = {foto}></img>
                        <Wrapper flexDirection = 'column' alignItems = 'center'>
                            <Name>João Vitor Souza</Name>
                            <label>Dev Front-end</label>
                            <label>Graduando em Sistemas de Informação</label>
                        </Wrapper>
                    </Wrapper>

                    <Contact>
                        <ul>
                            <LinkSocialMedia color = 'rgb(38, 89, 253)'>
                                <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/' target={'_blank'}>
                                    <AiFillLinkedin/>
                                </a>
                            </LinkSocialMedia>
                            
                            <LinkSocialMedia color = 'rgb(67, 67, 68)'>
                                <a href='https://github.com/JoaoSouz4' target={'_blank'}>
                                    <AiFillGithub/>
                                </a>
                            </LinkSocialMedia>

                            <LinkSocialMedia color = 'rgb(252, 8, 69)'>
                                <a href="mailto:joaosouz8@gmail.com?subject=Oi" target = {'_blank'}>
                                    <AiOutlineMail/>
                                </a>
                            </LinkSocialMedia>

                            <LinkSocialMedia color = 'rgb(252, 8, 150)'>
                                <a href='https://www.instagram.com/jo4o.souza/' target ={'_blank'}>
                                    <AiOutlineInstagram/>
                                </a>
                            </LinkSocialMedia>
                        </ul>
                    </Contact>
                </Aside>

                <TextBox>
                    <Title color = 'var(--color-secundary)'>Sobre mim</Title>
                    <Text>
                        Nasci e moro em Porto Velho, capital do estado de Rondônia, atualmente (05/2023) tenho 20 anos de idade.
                        Sempre gostei da cultura geek de modo em geral e a area da tecnologia nunca esteve de fora, principalmente
                        nos últimos 1,5 anos em que despertei o interesse na programação.
                    </Text>

                    <Text>  Assim que comecei os estudos, fiquei mara
                        vilhado com as possibilidades que a programação traz, na resolução de problemas e inovação do nosso mundo.
                        A programação é como uma tela em branco que desafia a criatividade toda vez que pensamos nela e no que podemos fazer.
                    </Text>
                </TextBox>
            </Container>

            <TextBox>
                <Title color = 'var(--color-secundary)'>Sobre este projeto</Title>
                <Text>Há cerca de 8 meses atrás, quando decidi estudar frontend, desenvolvi a primeria versão deste projeto, o objetivo eratestar meus conhecimentos, mesmo sendo muito vago. Na época eu tinha pouco conhecimento de html e css e nada de Javascript, se tratava de um site estático sem responsividade e com um ressalvas no design.</Text>
                <Text>Mesmo assim, criei um repositório e compartilhei a ideia em meu linkedin, afirmando que traria mais funcionalidade e performance.</Text>
                <Text>Sendo assim, me dediquei muito em persistir nos estudos, investi em cursos onlines e materias didáticos de forma progressiva, conforme os estudos avançam, fica mais claro sobre o que devo fazer e aprender para continuar a melhorar este projeto. </Text>
            </TextBox>

            <ProjectTools/>

            <TextBox>
                <Title color = 'var(--color-secundary)'>Considerações Finais</Title>
                <Text>
                    Agradeço pela visíta ao meu site e por estar lendo até aqui. Fique a vontade para dar dicas, sugestões ou qualquer coisa do tipo
                    a respeito de tudo envolvendo o site.
                </Text>
            </TextBox>

        </MainContainer>
    )
}