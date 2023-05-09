import Wrapper from "../../../../components/div";
import styles from './AnotherComment.module.css';

export function AnotherComment (props) {
    const { comment, userName, createdAt } = props;
    return (
        <Wrapper flexDirection = 'column' jc = 'flex-start' width = '100%' >
            <p className = {styles.comment}><strong>{userName}</strong> {comment}</p>
            <span className = {styles.dateComment}>{createdAt} </span>
        </Wrapper>
    )
}