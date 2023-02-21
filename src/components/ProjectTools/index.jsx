import './styles.css';

import { DiReact } from 'react-icons/di'
import {SiExpress } from 'react-icons/si'
import { GrNode} from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3} from 'react-icons/di' 
import { DiMongodb } from 'react-icons/di'
import { useState } from 'react';


export const ProjectTools = () => {
    const [toolDescription, setToolDescription] = useState("");

    const handleDescription = (func) => {
        setToolDescription(func);
    }
    return(
        <div className="tools-container">
            <h2>Ferramentas utilizadas</h2>
            <div className = "list-tools">

                <DiReact className='icon-tools'
                 onClick = {(e)=>handleDescription("Utilizei React em todo o front-end. A biblioteca me ajudou a fazer as requisições com o UseEffect e usar as variáveis de estado para salvar os dados e exibi-los na tela dinamicamente, além de ser possível usar JavScript no JSX e deixar a aplicação cada vez mais performática", e)}/>

                <SiExpress className='icon-tools'
                onClick = {(e)=>handleDescription("Este framework Node foi de extrema importância para a criação da API REST, facilitando no gerenciamento das rotas e inicialização do servidor, sendo de fácil utilização por ser um framework minimalista trazendo muitos benefícios ao backend", e)}/>

                <GrNode className='icon-tools'
                onClick = {(e) =>handleDescription("Gostei muito do processo de desenvolvimento, aprendi bastante a respeito do NPM e de alguns modulos como o nodemon, dotenv, cors, mongoose e express. Na API desenvolvi para que fosse possível retorna collections do MongoDB com o método GET e fazer novos registros com o POST, no caso utilizei o Insomnia para ajudar neste processo.",e)}/>

                <DiMongodb className='icon-tools'
                onClick = {(e) =>handleDescription("Foi o banco de dados que escolhi para esta aplicação, creio que também para muitas no futuro, por conta do excelente serviço do MongoDB. Utilizei o mongoDB atlas para armazenar os dados das ilustrações e das músicas em collections distintas, fiz a conexão do banco através do mongoose.",e)}/>

                <DiJavascript1 className='icon-tools'
                onClick = {(e) =>handleDescription("Tem sido minha principal linguaguem nos últimos meses, estou me aprofundando para também poder utilizar o typeScript, é uma linguaguem simples e produtiva de se trabalhar",e)}/>

                <DiCss3 className='icon-tools'
                onClick={(e)=>handleDescription("Evitei usar extensões como Saars e BootStrap até então, tenho focado em aprender CSS de verdade. Vai chegar o ponto em que a melhor opção será aderir as ferramentas citadas anteriormente, porém opito por fazer tudo na mão para entender de fato como a estilização está funcionando de baixo dos panos. ",e)}/>

            </div>

            <div>{toolDescription}</div>
        </div>

            // <p className='paragraph'>
            //     Este é um projeto que iniciei a 6 meses atrás, quando escolhi o frontend como area de entrada no desenvolvimento.
            //     Na época eu sabia muito pouco, fiz tudo utilizando apenas HTML5 e CSS3, eu não me surpreenderia se alguém disse que a escrita e 
            //     performance do código for duvidósa rsrsrs, porém mesmo assim fiz tudo que estava ao meu alcance, aprendi um pouco de git e upei o projeto em um repositório.
            // </p>

            // <p className='paragraph'>
            //     Esta primeira versão do site me possibilitou aprender o básico e eu decidi que iria refazê-lo depois de muito estudo.
            //     Sendo assim, comprei cursos e livros de JavaScript, React/Next e depois de 3 ou 4 meses, decidi mandar ver. Cheguei a notar uma evolução no meu código,
            //     porém sintia que precisava de mais performance, pois que poderia inserir os dados principais de forma dinâmica, mas não sabia como, e não sabia como
            //     achar essa resposta, então dei um tempo no projeto até descobrir. Depois de um tempo avançando nos estudos aprendi a consumir apis com
            //     JavaScript e trazer os dados para dentro de um projeto, achei tudo genial, mas por incrivel que pareça eu não tinha noção que eu mesmo
            //     poderia criar minha própia API! e demorei um tempo até descobrir.
            // </p> 

            // <p className='paragraph'>
            //     Após um tempo, cheguei a conclusão de que eu precisava de um banco de dados (mesmo sem sequer conhecer ou usar um) então
            //     pesquisei uma boa alternativa para usar com Javascript e escolhi o <strong>MongoDB</strong>. Comprei um curso de 20hrs sobre criar, gerenciar e conectar banco de dados
            //     em aplicações. Foi aí onde finalmente tive contado com o mongoose e por consequência a construção de API REST com nodeJS. Confesso que no início senti
            //     dificuldade em aprender a criar a API e enteder o padrão MVC para trabalhar com o banco, também para assimilar os testes no postman e insomnia, porém eu sabia que
            //     era questão de tempo até aprender, e depois tudo ficaria mais fácil, então eu persisti a cada dia, mesmo não tendo resultados sólidos, uma hora entrou na minha mente rsrs.
            // </p>
    )
}