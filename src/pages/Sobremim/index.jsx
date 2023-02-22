import './styles.css'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ProjectTools } from '../../components/ProjectTools'



export const Sobremim = () => {
    return(
        <main className = "main-container">

            <section className="apresentation">
                <div className="apresentation-box">
                    <div className="photo-and-contact">
                        <div className="photo">
                        </div>
                        <div className='name-and-ocupation'>
                            <label id="nome">João Vitor Souza</label>
                            <label id="ocupation">Dev Front-end</label>
                        </div>
                    </div>

                    <div className="contact">
                            <ul>
                                <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/' target={'_blank'} id ='linkedin'><AiFillLinkedin/></a>
                                <a href='https://github.com/JoaoSouz4' target={'_blank'} id ='github'><AiFillGithub/></a>
                                <a href="mailto:joaosouz8@gmail.com?subject=Oi" target = {'_blank'}id = "email"><AiOutlineMail/></a>
                                <a href='https://www.instagram.com/jo4o.souza/' target ={'_blank'} id = "insta"><AiOutlineInstagram/></a>
                            </ul>
                    </div>
                </div>

                <div className="apresentation-text">
                    <h2>Sobre mim</h2>
                    <p>
                        Nasci e moro em Porto Velho, capital do estado de Rondônia, atualmente (02/2023) tenho 20 anos de idade.
                        Sempre gostei da cultura geek de modo em geral e a area da tecnologia nunca esteve de fora, principalmente
                        nos últimos 1,5 anos em que despertei o interesse na programação.
                    </p>

                    <p>  Assim que comecei os estudos, fiquei mara
                        vilhado com as possibilidades que a programação traz, na resolução de problemas e inovação do nosso mundo.
                        A programação é como uma tela em branco que desafia a criatividade toda vez que pensamos nela eno que podemos fazer.
                    </p>

                    <p>
                        Escolhi iniciar com o front end, antes mesmo de começar a codar fiz muitos trabalhos acadêmicos de prototipação de 
                        aplicações que me fizeram estudar um pouco mais dos principios básicos do design.
                    </p>
                </div>
            </section>

            <section className='about-project'>
                <h2>Sobre este Projeto</h2>
                <p>Há cerca de 6 meses atrás, quando decidi estudar frontend, desenvolvi a primeria versão deste projeto, o objetivo era para testar meus conhecimentos, mas era muito simples, na época eu tinha pouco conhecimento de html e css e nada de Javascript, se tratava de um site estático sem uma responsividade bem trabalhada e com um ressalvas no design.</p>
                <p>Mesmo assim, criei um repositório e compartilhei a ideia em meu linkedin, afirmando que traria mais funcionalidade e performance.</p>
                <p>Sendo assim, me dediquei muito em persistir nos estudos, investi em cursos de Javascript, React e MongoDB de forma progressiva, conforme os estudos avançavam, ficava mais claro sobre o que eu deveria fazer e aprender para concluir este projeto com êxito. </p>
            </section>

            <ProjectTools>
            </ProjectTools>

            <section className="end">
                <div className="box-text">
                    <h2>Considerações Finais</h2>
                    <p>Agradeço pela visíta ao meu site e por estar lendo até aqui. Fique a vontade para dar dicas, sugestões ou qualquer coisa do tipo
                        a respeito de tudo envolvendo o site.
                    </p>
                </div>
            </section>

        </main>
    )
}