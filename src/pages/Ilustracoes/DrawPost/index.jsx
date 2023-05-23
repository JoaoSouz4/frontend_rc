import styles from './iconLike.module.css';
import { AiOutlineHeart,AiFillHeart, AiOutlineComment} from 'react-icons/ai';

import { useContext, useState, useEffect, useRef, createContext} from 'react';

import { PostContext } from '../SliderComponent';
import { Context } from '../../../context/authContext';


import _default from '../../../services/default';
import ShowLikes from '../showLikes';
import Wrapper  from '../../../components/div';
import { WrapperFixed, DrawPostContainer, InformationsPost, TitleDraw } from './styles';
import { MoreDetails } from '../MoreDetails';
import ShowComments from '../ShowComments';
import Image from '../../../components/Image/Image';
import Alert from '../../../components/Alert';
import WrapperAlert from '../../../components/WrapperAlert';

export const MethodsContext = createContext();

export const DrawPost = () =>{

    const { title, font, usersComments, usersLiked, _id, url, data} = useContext(PostContext)
    const { authenticated, userLog, requestAlert, setRequestAlert } = useContext(Context);

    const refMoreDetails = useRef();
    const refAlert = useRef();
    
    const [ qtdLikes, setQtdLikes ] = useState();
    const [qtdComments, setQtdComments] = useState();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=>{

        for( let i in usersLiked){
           if(usersLiked[i]._idUser == userLog.id){
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
                        setRequestAlert({isSucess: res.isSucess, message: res.message});
                        setQtdLikes(res.currentQtdLikes);
                        setIsLiked(true);
                        setTimeout(() => {
                            refAlert.current.style.display = 'none'
                            setRequestAlert({ isSucess: false, message: null});
                        }, 2000);
                    })
            }
            return
        }
        setRequestAlert({isSucess: false, message: 'Faça o login para curtir os posts'});
        setTimeout(() => {
            refAlert.current.style.display = 'none'
            setRequestAlert({ isSucess: false, message: null});
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
            setRequestAlert({isSucess: res.isSucess, message: res.message});
            setQtdLikes(res.currentQtdLikes);
            setIsLiked(false);
            setTimeout(() => {
                refAlert.current.style.display = 'none'
                setRequestAlert({isSucess: false, message: null})
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
                <Alert isSucess = {requestAlert.isSucess} message = {requestAlert.message}/>
            </WrapperAlert>
            
            <WrapperFixed ref = {refMoreDetails}>
                <MethodsContext.Provider value = {{setQtdComments}}>
                    <MoreDetails funcCallback = {handleCloseMoreDetails}></MoreDetails>
                </MethodsContext.Provider>
            </WrapperFixed>

            <DrawPostContainer>
                <Image url = {`${_default.urlApi}/files${url}`} alt = {title} ></Image>

                <InformationsPost>
                    <TitleDraw>{title}</TitleDraw>
                    <label>{font}</label>
                    <label>{data}</label>
                </InformationsPost>

                <Wrapper jc = 'space-around' width = '100%' padding = '0.3rem'>
                    <Wrapper alignItems = 'center' gap = '0.3rem' height = '100%'>
                        {!isLiked ? 
                            <>
                                <AiOutlineHeart className = {styles.icon} onClick = { () => {
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
                            <AiOutlineComment className = {styles.icon}/>
                            <ShowComments comments = {qtdComments}/>
                        </>
                    </Wrapper>
                </Wrapper>
            </DrawPostContainer>
        </>
    )
}
