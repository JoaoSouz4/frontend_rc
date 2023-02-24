import './styles.css';

import { DiReact } from 'react-icons/di'
import {SiExpress } from 'react-icons/si'
import { GrNode} from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3} from 'react-icons/di' 
import { DiMongodb } from 'react-icons/di'
import { useRef, useState } from 'react';


export const ProjectTools = () => {
    const [toolDescription, setToolDescription] = useState("*Clique em uma tech*");
    const desc = useRef();
    const iconTool = useRef();

    const handleDescription = (func) => {
        setToolDescription(func);
        desc.current.className = "static"
        desc.current.style.display = "block"
    }
    return(
        <div className="tools-container">
            <h2>Ferramentas utilizadas</h2>
            <div className = "list-tools">
                <DiReact className='icon-tools'
                id='react'
                onClick = {(e)=>handleDescription("Utilizei React em todo o front-end. A biblioteca me ajudou a fazer as requisições com o UseEffect e usar as variáveis de estado para salvar os dados e exibi-los na tela dinamicamente, além de ser possível usar JavScript no JSX e deixar a aplicação cada vez mais performática")}/>

                <SiExpress className='icon-tools'
                id='express'
                onClick = {(e)=>handleDescription("Este framework Node foi de extrema importância para a criação da API REST, facilitando no gerenciamento das rotas e inicialização do servidor, sendo de fácil utilização por ser um framework minimalista trazendo muitos benefícios ao backend")}/>

                <GrNode className='icon-tools'
                id='node'
                onClick = {(e) =>handleDescription("Gostei muito do processo de desenvolvimento, aprendi bastante a respeito do NPM e de alguns modulos como o nodemon, dotenv, cors, mongoose e express. Na API desenvolvi para que fosse possível retorna collections do MongoDB com o método GET e fazer novos registros com o POST, no caso utilizei o Insomnia para ajudar neste processo.")}/>

                <DiMongodb className='icon-tools'
                id = 'mongo'
                onClick = {(e) =>handleDescription("Foi o banco de dados que escolhi para esta aplicação, creio que também para muitas no futuro, por conta do excelente serviço do MongoDB. Utilizei o mongoDB atlas para armazenar os dados das ilustrações e das músicas em collections distintas, fiz a conexão do banco através do mongoose.")}/>

                <DiJavascript1 className='icon-tools'
                id = 'js'
                onClick = {(e) =>handleDescription("Tem sido minha principal linguaguem nos últimos meses, estou me aprofundando para também poder utilizar o typeScript, é uma linguaguem simples e produtiva de se trabalhar")}/>

                <DiCss3 className='icon-tools'
                id='css'
                onClick={(e)=>handleDescription("Evitei usar extensões como Saars e BootStrap até então, tenho focado em aprender CSS de verdade. Vai chegar o ponto em que a melhor opção será aderir as ferramentas citadas anteriormente, porém opito por fazer tudo na mão para entender de fato como a estilização está funcionando de baixo dos panos. ")}/>
            </div>

            <div className='description-tools' ref={desc}>{toolDescription}</div>
        </div>
    )
}