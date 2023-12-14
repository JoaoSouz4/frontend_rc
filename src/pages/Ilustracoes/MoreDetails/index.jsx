import './styles.css';
import { useState, useContext, useEffect, useRef, createContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { Context } from '../../../context/authContext';
import _default from '../../../services/default';
import styles from './moreDetails.module.css';
import Commentaries from '../Commentary';
import Wrapper from '../../../components/div';
import Button from  '../../../components/Button/button';
import { PostContext } from '../SliderComponent';
import { MethodsContext } from '../DrawPost';
import Alert from '../../../components/Alert'
import WrapperAlert from '../../../components/WrapperAlert';
import getToken from '../../../services/getToken';

export const CommentContext = createContext();

export const MoreDetails = (props) => {
    
    const { authenticated, userLog, requestAlert, setRequestAlert } = useContext(Context);
    const ctx = useContext(PostContext);

    const { setQtdComments } = useContext(MethodsContext);
    const { funcCallback } = props;

    const inputCommentRef = useRef();
    const refAlert = useRef();

    const [allComments, setAllComments] = useState();
    const [ comment, setComment ] = useState("");

    useEffect( () => setAllComments(ctx.usersComments), [])
    
    function handleComment(){

        const token = getToken();
        refAlert.current.style.display = 'flex';

        if(!authenticated) {
            setRequestAlert( { isSucess: false, message: 'Faça o login para poder comentar'})
            return setTimeout(() => {
                refAlert.current.style.display = 'none';
                setRequestAlert( { isSucess: false, message: null})
            }, 2000)
        }

        fetch(`${_default.urlApi}/insert/${userLog.id}/${ctx._id}/${comment}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).then(res => res.json()).then( (res) => {
            setRequestAlert( { isSucess: res.isSucess , message: 'Obrigado pelo comentário!'})
            setQtdComments(res.currentComments.length)
            setAllComments(res.currentComments);
            inputCommentRef.current.value = "";

            setTimeout(() => {
                refAlert.current.style.display = 'none';
                setRequestAlert( { isSucess: false, message: null})
            },2000)
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
            position = 'relative'
        >
            <WrapperAlert position = 'fixed' bottom = '2rem' left = '2rem' ref = {refAlert}>
                <Alert isSucess = {requestAlert.isSucess} message = {requestAlert.message}/>
            </WrapperAlert>

            <div className={styles.buttonCloser} onClick = {funcCallback}>
                <AiOutlineClose className='icon-closer'/>
            </div>
    
            <div className='div-whith-informations'>

                <div className="draw-photo-container">
                    <img src = {ctx.url} className="draw-photo-item" loading = "lazy"/>
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
