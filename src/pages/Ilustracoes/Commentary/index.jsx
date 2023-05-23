import styles from './commentary.module.css'
import _default from '../../../services/default';
import Wrapper from '../../../components/div';
import { Context } from '../../../context/authContext';
import { useContext } from 'react';
import { UserComment } from './UserComment';
import { AnotherComment } from './AnotherComment';
import { Spinner } from 'reactstrap';

function Commentaries(props) {
    
    const { commentsList } = props;
    const { userLog } = useContext(Context);

    return(
        <ul className = {styles.list}>
            
            {commentsList? 
                commentsList.length > 0 ? 
                    commentsList.map( c => {
                        if(c.commentary){

                            if(userLog.id == c.idUser){
                                return  <UserComment
                                            key = {c._id}
                                            id = {c._id}
                                            comment = {c.commentary}
                                            idPost = {c.idPost}
                                            userName = {c.userName}
                                            createdAt = {c.createdAt}
                                        />
                            } else {
                                return (
                                    <AnotherComment
                                        key = {c._id}
                                        comment = {c.commentary}
                                        userName = {c.userName}
                                        createdAt = {c.createdAt}
                                    >
                                    </AnotherComment>
                                )
                            }

                        } else {
                            return (
                                <AnotherComment
                                    key = {c._id}
                                    comment = {c.commentary}
                                    userName = {c.userName}
                                    createdAt = {c.createdAt}
                                >
                                </AnotherComment>
                            )
                        }})
                : <Wrapper color = 'var(--color-gray)' width = '100%' jc = 'center' height = '100%'>Seja o primeiro a comentar :)</Wrapper>
            :
                <Spinner color = 'secundary' type = 'grow'/>
            }
        </ul>
    )
}

export default Commentaries;