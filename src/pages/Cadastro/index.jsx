import _default from '../../config/default';

//Css
import styles from './cadastro.module.css'

//Hooks
import { useState, useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/authContext';
//Icons
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

//Components
import Title from '../../components/Title';
import Input from '../../components/input';
import Button from '../../components/Button/button';
import Wrapper from '../../components/div';
import Section from '../../components/Section'
import FormComponent from '../../components/FormComponent';
import WrapperAlert from '../../components/WrapperAlert';
import Alert from '../../components/Alert';

export default function Cadastro() {

    
    const { refAlert, refSubmit, setRequestIsSucess, setRequestMessage, requestIsSucess, requestMessage} = useContext(Context);
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPass, setUserPass] = useState();
    const [userConfirmPass, setUserConfirmPass] = useState();

    const [ seePass, setSeePass] = useState(true);
    const refPass = useRef();
    const refCPass = useRef();
    const navigate = useNavigate()

    const handleRegister = (e,name, email, pass, cPass) => {

        e.preventDefault();

        fetch(`${_default.urlApi}/register`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userName: name,
                userEmail: email,
                userPass: pass,
                userConfirmPass: cPass
            })
        })
        .then( (resp) => resp.json())
        .then( (resp) => {

            if(!resp.isSucess){
                setRequestIsSucess(resp.isSucess);
                setRequestMessage(resp.message);
                refSubmit.current.disabled = false;

                setTimeout(()=> {
                    refAlert.current.style.display = 'none'
                    setRequestMessage("");
                    setRequestIsSucess("");
                }, 4000);
                return
            } else {

                setRequestIsSucess(resp.isSucess);
                setRequestMessage(resp.message);
                refSubmit.current.disabled = false;
                setTimeout(()=> {
                    refAlert.current.style.display = 'none'
                    setRequestMessage("");
                    setRequestIsSucess("");
                }, 2000);
                window.location.href = "/"
            }
        }
        )
    }

    return (
        <Section alignItems = 'center'>

            <WrapperAlert position = 'absolute' bottom = '2rem' left = '2rem' ref = {refAlert} alignItems = 'center' jc = 'center'>
                <Alert isSucess = {requestIsSucess} message = {requestMessage}/>
            </WrapperAlert>

            <FormComponent>
            <Title color = 'var(--color-secundary)' size = '1.8rem' align = 'center'>Cadastro de Usuário</Title>
                <Wrapper flexDirection = 'column' width = '100%'>
                    <label><AiOutlineUser/>Nome de usuário</label>
                    <Input
                        type = "text" 
                        placeholder = "Crie um nome de usuário"
                        onChange = {(e) => setUserName(e.target.value)}
                    />
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>
                    <label><AiOutlineMail/>Email</label>
                    <Input 
                        type = "email" 
                        placeholder = "Insira seu melhor email"
                        onChange = { (e) => setUserEmail(e.target.value)}
                        width = '100%'
                        />
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>
                    <label className = {styles.seePassArea}>
                        <div className = {styles.div}>
                            <AiOutlineLock/>
                            Crie uma senha
                        </div>

                        {!seePass ? 
                            <AiOutlineEyeInvisible 
                                className = {styles.eyeOpen}
                                onClick={() => {
                                    setSeePass(later => !later);
                                    refPass.current.type = "text"
                                    refCPass.current.type = "text"
                                }}
                            /> :
                            <AiOutlineEye
                                className = {styles.eyeClose}
                                onClick={() => {
                                    setSeePass(later => !later)
                                    refPass.current.type = "password"
                                    refCPass.current.type = "password"
                                }}
                            />
                        }
        
                    </label>
                    <Input
                        ref = {refPass} 
                        type = "password" 
                        placeholder = "crie uma senha"
                        onChange = { (e) => setUserPass(e.target.value)}
                    />
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>
                    <label><AiOutlineLock/>Confirmar senha</label>
                    <Input
                        ref = {refCPass}
                        type="password" 
                        placeholder="Reescreva a senha criada"
                        onChange = { (e) => setUserConfirmPass(e.target.value)}
                    />
                </Wrapper>

                <Button
                    ref = {refSubmit}
                    type="submit"
                    width = '100%'
                    onClick={ 
                        (e) => {
                            refSubmit.current.disabled = true;
                            refAlert.current.style.display = 'flex';
                            handleRegister(e,userName, userEmail, userPass, userConfirmPass)
                        }
                    }
                    >Cadastrar
                </Button>
                <Link className = {styles.link} to = {"/Login"}>Já possui uma conta?</Link>
            </FormComponent>
        </Section>
    )
}