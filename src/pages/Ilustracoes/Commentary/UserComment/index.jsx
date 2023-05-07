import Wrapper from "../../../../components/div";
import _default from "../../../../config/default";
import styles from './UserComment.module.css';
import { useContext } from "react";
import { CommentContext } from "../../MoreDetails";
import { MethodsContext } from "../../DrawPost";

export function UserComment (props) {
    const { id, comment, userName, idPost } = props;
    const { setAllComments } = useContext(CommentContext);
    const { setQtdComments} = useContext(MethodsContext)

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
    const data = new Date();
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();  
    return (
        <Wrapper flexDirection = 'column' jc = 'flex-start' width = '100%' >
            <p className = {styles.comment}><strong>{userName}</strong> {comment}
            </p>
            <span className = {styles.dateComment}>{dataFormatada} | <span onClick = { () => {dropComment()}} className = {styles.drop}>excluir</span></span>
        </Wrapper>
    )
}