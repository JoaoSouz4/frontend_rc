
import { AiOutlineCheckCircle }  from 'react-icons/ai';
import { CiCircleAlert } from 'react-icons/ci';
import { Spinner } from 'reactstrap';
import Wrapper from '../div';
import { AlertContainer } from './styles';
import { useEffect, useRef } from 'react';
import WrapperAlert from '../WrapperAlert';

function Alert(props) {

   const { message, isSucess } = props;
  
    return (
    
        <AlertContainer>
            {
                !message ?
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
        </AlertContainer>
    )
}

export default Alert;