import styles from './icon.module.css'
import { AiOutlineHeart,AiFillHeart, AiOutlineComment} from 'react-icons/ai';
import { useContext, useState, useEffect, useRef, createContext} from 'react';
import ShowLikes from '../showLikes';
import Wrapper  from '../../../components/div';
import { MoreDetails } from '../MoreDetails';
import ShowComments from '../ShowComments';
import ImageDraw from '../Image/ImgDraw';
import Alert from '../../../components/Alert';
import WrapperAlert from '../../../components/WrapperAlert';
import { Spinner } from 'reactstrap';
import { WrapperFixed, DrawPostContainer, InformationsPost, TitleDraw, BoxOption, Option } from './styles';

import getToken from '../../../services/getToken';
import _default from '../../../services/default';
import { Context } from '../../../context/authContext';
import { PostContext } from '../SliderComponent';

export const MethodsContext = createContext();

export const DrawPost = () =>{

    const { title, font, usersComments, usersLiked, _id, url, data} = useContext(PostContext)
    const { authenticated, userLog, requestAlert, setRequestAlert } = useContext(Context);

    const refMoreDetails = useRef();
    const refAlert = useRef();
    
    const [ qtdLikes, setQtdLikes ] = useState();
    const [qtdComments, setQtdComments] = useState();
    const [isLiked, setIsLiked] = useState(false);
    const [loadLike, setLoadLike] = useState(false);

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
        setLoadLike(true);
        const token = getToken();

        if(authenticated){
            if(isLiked) return handleDeslike();
            
            fetch(`${_default.urlApi}/likepost/${userLog.id}/${_id}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then( res => res.json())
            .then( (res) => {
                setQtdLikes(res.currentQtdLikes);
                setIsLiked(true);
                setLoadLike(false);
            })
        } else {
            setLoadLike(false);
            refAlert.current.style.display = 'flex'
            setRequestAlert({isSucess: false, message: 'Faça o login para curtir os posts'});
            setTimeout(() => {
                refAlert.current.style.display = 'none'
                setRequestAlert({ isSucess: false, message: null});
            }, 2000);
        }
    }

    function handleDeslike(){
        setLoadLike(true);
        const token = getToken();

        fetch(`${_default.urlApi}/deslikepost/${userLog.id}/${_id}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then( res => res.json())
        .then( (res) => {
            setQtdLikes(res.currentQtdLikes);
            setIsLiked(false);
            setLoadLike(false);
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
            <WrapperAlert ref = {refAlert}>
                <Alert isSucess = {requestAlert.isSucess} message = {requestAlert.message}/>
            </WrapperAlert>
            
            <WrapperFixed ref = {refMoreDetails}>
                <MethodsContext.Provider value = {{setQtdComments}}>
                    <MoreDetails funcCallback = {handleCloseMoreDetails}></MoreDetails>
                </MethodsContext.Provider>
            </WrapperFixed>

            <DrawPostContainer>
                <ImageDraw url = {`${_default.urlApi}/files${url}`} alt = {title} ></ImageDraw>

                <InformationsPost>
                    <TitleDraw>{title}</TitleDraw>
                    <label>{font}</label>
                    <label>{data}</label>
                </InformationsPost>

                <Wrapper jc = 'space-around' width = '100%' padding = '0.3rem'>
                    <BoxOption>
                        <Option>
                        {
                        
                        !isLiked ? 
                            <>
                                {loadLike ?
                                    <>
                                        <Spinner color = 'secundary' type = 'grow' style = {{height: '1rem', width: '1rem'}}/>
                                    </>
                                :
                                    <>
                                        <AiOutlineHeart onClick = {handleLike}/>
                                        <ShowLikes likes = {qtdLikes}/> 
                                    </>
                                }
                            </>
                        :
                            <>
                                {loadLike ?
                                    <>
                                        <Spinner color = 'secundary' type = 'grow' style = {{height: '1rem', width: '1rem'}}/>
                                    </>
                                :
                                    <>
                                        <AiFillHeart className = {styles.icon} onClick = {handleLike}/>
                                        <ShowLikes likes = {qtdLikes}/>
                                    </>
                                }
                            </> 
                        }
                        </Option>
                    </BoxOption>

                    <BoxOption onClick = {handleOpenMoreDetails}> 
                        <>
                            <AiOutlineComment/>
                            <ShowComments comments = {qtdComments}/>
                        </>
                    </BoxOption>
                </Wrapper>
            </DrawPostContainer>
        </>
    )
}
