import Wrapper from "../../../../components/div";
import _default from "../../../../config/default";
import styles from './UserComment.module.css';
import { useContext } from "react";
import { CommentContext } from "../../MoreDetails";
import { MethodsContext } from "../../DrawPost";
import Alert from "../../../../components/Alert";

export function UserComment (props) {
    const { id, comment, userName, idPost, createdAt } = props;
    const { setAllComments } = useContext(CommentContext);
    const { setQtdComments, setRequestIsSucess, setRequestMessage, requestMessage, requestIsSucess} = useContext(MethodsContext);

    const date = new Date(createdAt);
    const day = date.getDate();
    const mes = date.getMonth();
    const ano = date.getFullYear();
    const dateComment = `${day}/${mes+1}/${ano}`

    function dropComment () {;
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
            });
    }
    return (
        <>
            <Wrapper flexDirection = 'column' jc = 'flex-start' width = '100%' >
                <p className = {styles.comment}><strong>{userName}</strong> {comment}</p>
                <span className = {styles.dateComment}>{dateComment} | <span onClick = { () => {dropComment()}} className = {styles.drop}>excluir</span></span>
            </Wrapper>
        </>
       
    )
}