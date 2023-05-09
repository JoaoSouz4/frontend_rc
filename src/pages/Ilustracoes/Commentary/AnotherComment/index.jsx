import Wrapper from "../../../../components/div";
import styles from './AnotherComment.module.css';

export function AnotherComment (props) {
    const { comment, userName, createdAt } = props;
    const date = new Date(createdAt);
    const day = date.getDate();
    const mes = date.getMonth();
    const ano = date.getFullYear();
    const dateComment = `${day}/${mes+1}/${ano}`
    return (
        <Wrapper flexDirection = 'column' jc = 'flex-start' width = '100%' >
            <p className = {styles.comment}><strong>{userName}</strong> {comment}</p>
            <span className = {styles.dateComment}>{dateComment} </span>
        </Wrapper>
    )
}