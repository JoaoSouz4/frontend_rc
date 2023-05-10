import styles from './alert.module.css'
import { AiOutlineCheckCircle }  from 'react-icons/ai';
import { CiCircleAlert } from 'react-icons/ci';
import { Spinner } from 'reactstrap';
import Wrapper from '../div';
function Alert(props) {

    const message = props.message;
    const isSucess = props.isSucess;

    return (
        <div className = {styles.alert}> 
            {

            ! message ?
                <Wrapper jc = 'center' alignItems = 'center' gap = '1rem'>
                    <Spinner color = 'secundary' type = 'grow' style = {{height: '0.5rem', width: '0.5rem'}}/>
                    carregando. Por favor, aguarde....
                </Wrapper>
            :
            
            isSucess ? 
                <AiOutlineCheckCircle/>
            :
                <CiCircleAlert/>
            }

            {message}
        </div>
    )
}

export default Alert;