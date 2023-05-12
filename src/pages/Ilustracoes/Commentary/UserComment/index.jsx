import Wrapper from "../../../../components/div";
import _default from "../../../../config/default";
import styles from './UserComment.module.css';
import { useContext, useRef } from "react";
import { CommentContext } from "../../MoreDetails";
import { MethodsContext } from "../../DrawPost";
import Alert from "../../../../components/Alert";
import WrapperAlert from "../../../../components/WrapperAlert";
import { Context } from "../../../../context/authContext";

export function UserComment (props) {
    const { id, comment, userName, idPost, createdAt } = props;
    const { setAllComments } = useContext(CommentContext);
    const { setQtdComments} = useContext(MethodsContext);
    const { setRequestIsSucess, setRequestMessage, requestMessage, requestIsSucess } = useContext(Context);


    const date = new Date(createdAt);
    const day = date.getDate();
    const mes = date.getMonth();
    const ano = date.getFullYear();
    const dateComment = `${day}/${mes+1}/${ano}`
    const refAlert = useRef();

    function dropComment () {;

        refAlert.current.style.display = 'flex';

        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token);

        fetch(`${_default.urlApi}/dropcomment/${id}/${idPost}`, {
            method : 'POST',
            headers: {
                'Authorization': 'Bearer ' + tokenP
            }
        })
            .then(res => res.json())
            .then( res => {
                setAllComments(res.currentComments);
                setQtdComments(res.currentComments.length);
                setRequestMessage('comentário removido');
                setRequestIsSucess(res.isSucess);
                

                setTimeout(()=>{
                    refAlert.current.style.display = 'none';
                    setRequestIsSucess('');
                    setRequestMessage('');
                }, 2000)
            });
    }
    return (
        <>
            <WrapperAlert position = 'fixed' bottom = '2rem' left = '2rem' ref = {refAlert} alignItems = 'center' jc = 'center'>
                <Alert isSucess = {requestIsSucess} message = {requestMessage}/>
            </WrapperAlert>

            <Wrapper flexDirection = 'column' jc = 'flex-start' width = '100%' >
                <p className = {styles.comment}><strong>{userName}</strong> {comment}</p>
                <span className = {styles.dateComment}>{dateComment} | <span onClick = { () => {dropComment()}} className = {styles.drop}>excluir</span></span>
            </Wrapper>
        </>
       
    )
}