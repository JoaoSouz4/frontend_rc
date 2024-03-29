

//Icons
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

//Routes
import { Link } from 'react-router-dom';

//Hooks
import { useState, useRef, useContext } from 'react';
import { Context } from '../../context/authContext';

//Components
import Input from '../../components/input';
import Button from '../../components/Button/button';
import Title from '../../components/Title';
import Wrapper from '../../components/div';
import FormComponent from '../../components/FormComponent';
import WrapperAlert from '../../components/WrapperAlert';
import Alert from '../../components/Alert';
import MainContainer from '../../components/mainContainer';
import Layout from '../../components/layout'

function LoginPage(){

    const [seePass, setSeePass] = useState(true);
    const [ email, setEmail ] = useState("");
    const [ pass, setPass] = useState("");
    const refPass = useRef();
    const { authenticated, handleLogin, requestIsSucess, requestMessage, refAlert, refSubmit } = useContext(Context);

    return (
        <MainContainer>
            <WrapperAlert  ref = {refAlert} >
                <Alert isSucess = {requestIsSucess} message = {requestMessage}/>
            </WrapperAlert>

           <FormComponent>
                <Title align = 'center' color = 'var(--color-secundary)' size = '1.8rem'>Login</Title>
                <Wrapper flexDirection = 'column'  width = '100%'>
                    <label><AiOutlineUser/>Nome de usuário</label>
                    <Input
                        type="text" 
                        placeholder="Insira seu nome de usuário"
                        onChange={(e) => setEmail(e.target.value)}
                        width = '100%'
                        />
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>

                    <label>
                        <Wrapper>
                            <AiOutlineLock/>Senha
                        </Wrapper>

                        {!seePass ? 
                            <AiOutlineEye
                                
                                onClick={() => {
                                    setSeePass(later => !later);
                                    refPass.current.type = "password"
                                    
                                }}
                            /> :
                            <AiOutlineEyeInvisible 
                                
                                onClick={() => {
                                    setSeePass(later => !later)
                                    refPass.current.type = ""
                                    
                                }}
                            />
                        }   
                    </label>

                    <Input 
                        type="password"
                        placeholder = "insira sua senha"
                        ref = {refPass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <Link>Esqueci a senha.</Link>
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>

                    <Button 
                        ref = {refSubmit}
                        width = '100%'
                        onClick={ 
                            (e) => {
                                refSubmit.current.disabled = true;
                                refAlert.current.style.display = 'flex';
                                handleLogin(e, email, pass)
                            }
                        } 
                    >Entrar
                    </Button>

                    <Link to = {'/Cadastro'}>Não tenho uma conta.</Link>
                </Wrapper>
           </FormComponent>
        </MainContainer>
    )
}
export default LoginPage;