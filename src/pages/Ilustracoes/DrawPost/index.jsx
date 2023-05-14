import './styles.css'
import styles from './iconLike.module.css';
import { AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import { useContext, useState, useEffect, useRef, createContext} from 'react';

import { PostContext } from '../SliderComponent';
import { Context } from '../../../context/authContext';

import { FaRegComment } from 'react-icons/fa';
import _default from '../../../config/default';
import ShowLikes from '../showLikes';
import Wrapper  from '../../../components/div';
import WrapperFixed from '../../../components/WrapperFixed';
import { MoreDetails } from '../MoreDetails';
import ShowComments from '../ShowComments';
import Image from '../../../components/Image/Image';
import Alert from '../../../components/Alert';
import WrapperAlert from '../../../components/WrapperAlert';

export const MethodsContext = createContext();

export const DrawPost = () =>{

    const ctx = useContext(PostContext);
    const { title, font, usersComments, usersLiked, _id, url, data} = ctx;
    const { authenticated, userLog, requestIsSucess, requestMessage, setRequestIsSucess, setRequestMessage } = useContext(Context);

    const refMoreDetails = useRef();
    const refAlert = useRef();
    
    const [ qtdLikes, setQtdLikes ] = useState();
    const [qtdComments, setQtdComments] = useState();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=>{

        for( let i in ctx.usersLiked){
           if(ctx.usersLiked[i]._idUser == userLog.id){
            setIsLiked(true);
           }
        }
        setQtdLikes(usersLiked.length);
        setQtdComments(usersComments.length);
    }, []);

    function handleLike(){
        
        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token)

        if(authenticated){
            if(isLiked) {
                handleDeslike();
                return
            } else {
                fetch(`${_default.urlApi}/likepost/${userLog.id}/${_id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + tokenP
                    }
                })
                    .then( res => res.json())
                    .then( (res) => {
                        setRequestIsSucess(res.isSucess);
                        setRequestMessage(res.message);
                        setQtdLikes(res.currentQtdLikes);
                        setIsLiked(true);
                        setTimeout(() => {
                            refAlert.current.style.display = 'none'
                            setRequestIsSucess("");
                            setRequestMessage("");
                        }, 2000);
                    })
            }
            return
        }
        setRequestIsSucess(false);
        setRequestMessage('Faça o login para curtir os posts.');
        setTimeout(() => {
            refAlert.current.style.display = 'none'
            setRequestIsSucess("");
            setRequestMessage("");
        }, 2000);
        
    }

    function handleDeslike(){
        refAlert.current.style.display = 'flex';

        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token);

        fetch(`${_default.urlApi}/deslikepost/${userLog.id}/${_id}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + tokenP
            }
        })
        .then( res => res.json())
        .then( (res) => {
            setRequestIsSucess(res.isSucess);
            setRequestMessage(res.message);
            setQtdLikes(res.currentQtdLikes);
            setIsLiked(false);
            setTimeout(() => {
                refAlert.current.style.display = 'none'
                setRequestIsSucess("");
                setRequestMessage("");
            }, 2000);
        }) 
    }


    function handleOpenMoreDetails(){
        refMoreDetails.current.style.display = 'flex';
    }

    function handleCloseMoreDetails(){
        refMoreDetails.current.style.display = 'none';
    }

    return(
        <>
        
        <WrapperAlert ref = {refAlert} position = 'fixed' bottom = '2rem' left = '2rem' alignItems = 'center' jc = 'center'>
            <Alert isSucess = {requestIsSucess} message = {requestMessage}/>
        </WrapperAlert>
        
        <WrapperFixed ref = {refMoreDetails}>
            <MethodsContext.Provider value = {{setQtdComments}}>
                <MoreDetails funcCallback = {handleCloseMoreDetails}></MoreDetails>
            </MethodsContext.Provider>
        </WrapperFixed>

        <div className='container-draw-post'>
          
            <Image url = {`${_default.urlApi}/files${url}`} alt = {title} ></Image>

            <div className='post-description'>
                <label className='title'>{title}</label>
                <label className='font'>{font}</label>
                <label className='data'>{data}</label>
            </div>

            <Wrapper jc = 'space-around' width = '100%' borderTop = '1px solid var(--color-gray)' padding = '0.3rem'>

                <Wrapper alignItems = 'center' gap = '0.3rem' height = '100%'>
                    {!isLiked ? 
                        <>
                            <AiOutlineHeart onClick = { () => {
                                refAlert.current.style.display = 'flex';
                                handleLike();
                            }}/>
                            <ShowLikes likes = {qtdLikes}/>
                        </>
                    :
                        <>
                            <AiFillHeart className = {styles.iconLike} onClick = { () => {
                                refAlert.current.style.display = 'flex';
                                handleLike();
                                }
                            }/>
                            <ShowLikes likes = {qtdLikes}/>
                        </> 
                    }
                </Wrapper>

                <Wrapper onClick = {handleOpenMoreDetails} alignItems = 'center' gap = '0.3rem'> 
                <>
                    <FaRegComment className = 'option-icon'/>
                    <ShowComments comments = {qtdComments}/>
                </>
                </Wrapper>
            </Wrapper>
        </div>
        </>
    )
}
