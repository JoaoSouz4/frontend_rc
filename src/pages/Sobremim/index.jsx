import './styles.css'

import { DiReact } from 'react-icons/di'
import {SiExpress } from 'react-icons/si'
import { GrNode} from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3} from 'react-icons/di' 
import { DiMongodb } from 'react-icons/di'
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";



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
                        <label>Me mande um "oi"!</label>
                            <ul>
                                <a href='#' id ='linkedin'><AiFillLinkedin/></a>
                                <a href='#' id ='github'><AiFillGithub/></a>
                                <a href='#' id = "email"><AiOutlineMail/></a>
                                <a href='#' id = "insta"><AiOutlineInstagram/></a>
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
                </div>
            </section>

            <section className="conclusion">

                <div className="box-text">
                    <h2>Sobre este projeto</h2>

                    <h3>Ferramentas utilizadas</h3>
                    <div>
                        <DiReact className='icon-tools'/>
                        <SiExpress className='icon-tools'/>
                        <GrNode className='icon-tools'/>
                        <DiMongodb className='icon-tools'/>
                        <DiJavascript1 className='icon-tools'/>
                        <DiCss3 className='icon-tools'/>
                    </div>

                    <p className='paragraph'>
                        Este é um projeto que iniciei a 6 meses atrás, quando escolhi o frontend como area de entrada no desenvolvimento.
                        Na época eu sabia muito pouco, fiz tudo utilizando apenas HTML5 e CSS3, eu não me surpreenderia se alguém disse que a escrita e 
                        performance do código for duvidósa rsrsrs, porém mesmo assim fiz tudo que estava ao meu alcance, aprendi um pouco de git e upei o projeto em um repositório.
                    </p>
                    <p className='paragraph'>
                        Esta primeira versão do site me possibilitou aprender o básico e eu decidi que iria refazê-lo depois de muito estudo.
                        Sendo assim, comprei cursos e livros de JavaScript, React/Next e depois de 3 ou 4 meses, decidi mandar ver. Cheguei a notar uma evolução no meu código,
                        porém sintia que precisava de mais performance, pois que poderia inserir os dados principais de forma dinâmica, mas não sabia como, e não sabia como
                        achar essa resposta, então dei um tempo no projeto até descobrir. Depois de um tempo avançando nos estudos aprendi a consumir apis com
                        JavaScript e trazer os dados para dentro de um projeto, achei tudo genial, mas por incrivel que pareça eu não tinha noção que eu mesmo
                        poderia criar minha própia API! e demorei um tempo até descobrir.
                    </p> 

                    <p className='paragraph'>
                        Após um tempo, cheguei a conclusão de que eu precisava de um banco de dados (mesmo sem sequer conhecer ou usar um) então
                        pesquisei uma boa alternativa para usar com Javascript e escolhi o <strong>MongoDB</strong>. Comprei um curso de 20hrs sobre criar, gerenciar e conectar banco de dados
                        em aplicações. Foi aí onde finalmente tive contado com o mongoose e por consequência a construção de API REST com nodeJS. Confesso que no início senti
                        dificuldade em aprender a criar a API e enteder o padrão MVC para trabalhar com o banco, também para assimilar os testes no postman e insomnia, porém eu sabia que
                        era questão de tempo até aprender, e depois tudo ficaria mais fácil, então eu persisti a cada dia, mesmo não tendo resultados sólidos, uma hora entrou na minha mente rsrs.
                    </p>
        
                </div>

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