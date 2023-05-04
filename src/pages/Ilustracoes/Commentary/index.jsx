import styles from './commentary.module.css'
import _default from '../../../config/default';
import Wrapper from '../../../components/div';
import { Context } from '../../../context/authContext';
import { useContext } from 'react';
import { OneComment } from './OneComment';
import { AnotherComment } from './AnotherComment';
import { LoaderComponent } from '../../../components/LoaderComponent';

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
                                return  <OneComment
                                            key = {c._id}
                                            id = {c._id}
                                            comment = {c.commentary}
                                            idPost = {c.idPost}
                                            userName = {c.userName}
                                        />
                            } else {
                                return (
                                    <AnotherComment
                                        key = {c._id}
                                        comment = {c.commentary}
                                        userName = {c.userName}
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
                                >
                                </AnotherComment>
                            )
                        }})
                : <Wrapper color = 'var(--color-gray)' width = '100%' jc = 'center' height = '100%'>Seja o primeiro a comentar :)</Wrapper>
            :
             <LoaderComponent/>
            }
        </ul>
    )
}

export default Commentaries;