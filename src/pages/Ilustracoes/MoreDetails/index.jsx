import './styles.css';
import { useState, useContext, useEffect, useRef, createContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { Context } from '../../../context/authContext';
import _default from '../../../config/default';
import styles from './moreDetails.module.css';
import Commentaries from '../Commentary';
import Wrapper from '../../../components/div';
import Button from  '../../../components/Button/button';
import { PostContext } from '../SliderComponent';
import { MethodsContext } from '../DrawPost';

export const CommentContext = createContext();

export const MoreDetails = (props) => {
    
    const { userLog, authenticated} =  useContext(Context);

    const ctx = useContext(PostContext);
    const { setQtdComments } = useContext(MethodsContext);
    const { funcCallback } = props; 

    const [allComments, setAllComments] = useState();
    const [ comment, setComment ] = useState("");

    const inputCommentRef = useRef()

    useEffect( () => setAllComments(ctx.usersComments), [])
    
    function handleComment(){
 
        if(!authenticated) return alert('Faça o login para poder comentar')
        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token);
        fetch(`http://localhost:8001/insert/${userLog.id}/${ctx._id}/${comment}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + tokenP
            },
        }).then(res => res.json()).then(res => {
            setQtdComments(res.currentComments.length)
            setAllComments(res.currentComments);
            inputCommentRef.current.value = "";  
        })
    }


    return (
        <Wrapper 
            jc = 'center' 
            alignItems = 'center' 
            flexDirection = 'column' 
            width = '90%' 
            height = '90%'
            bgColor = ' #fafafa'
        >

            <div 
                className='button-closer'
                onClick = {funcCallback}
            >
                <AiOutlineClose className='icon-closer'/>
            </div>
    
            <div className='div-whith-informations'>

                <div className="draw-photo-container">
                    <img src = {`${_default.urlApi}/files/${ctx.url}`} className="draw-photo-item" loading = "lazy"/>
                </div>

                <section className = {styles.commentaryAndInfo}> 

                    <div className="draw-informations">

                        <div className= {styles.drawDatas}>
                            <h2 className= {styles.titleDraw}>{ctx.title} | {ctx.font}</h2>
                            <p>Feito em: {ctx.data}</p>
                        </div>
                        <div className = {styles.drawDescription}>
                            <h2 className = {styles.titleDescription}>Descrição</h2>
                            <p>{ctx.description}</p>
                        </div>
                        <CommentContext.Provider value = {{setAllComments, setQtdComments}}>
                            <Commentaries commentsList = {allComments}/>
                        </CommentContext.Provider>
                    </div>

                    <div className = {styles.inputCommentaryContainer}>
                        <input 
                            type="text" 
                            placeholder='Insira um commentário' 
                            className = {styles.inputCommentary}
                            onChange={ e => setComment(e.target.value)}
                            ref = {inputCommentRef}
                            
                        />

                        <Button onClick={handleComment} width = '20%' >Send</Button>
                    </div>
                </section>
            </div>
        </Wrapper>
        ) 
    }