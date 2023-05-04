import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';


import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Context } from '../../context/authContext';
import MainContainer from '../../components/MainContainer/mainContainer';
import Input from '../../components/input';
import Button from '../../components/Button/button';
import Title from '../../components/Title/Title';
import Wrapper from '../../components/div';
import Section from '../../components/Section'
import FormComponent from '../../components/FormComponent';
function LoginPage(){

    const [seePass, setSeePass] = useState(true);
    const [ email, setEmail ] = useState("");
    const [ pass, setPass] = useState("");
    const refPass = useRef();
    const { authenticated, handleLogin } = useContext(Context);

    return (
        <Section alignItems = 'center'>
           <FormComponent>
                <Title align = 'center' color = 'var(--color-secundary)' size = '1.8rem'>Login</Title>
                <Wrapper flexDirection = 'column'  width = '100%'>
                    <label className = {styles.label}><AiOutlineUser/>Nome de usuário</label>
                    <Input
                        type="text" 
                        placeholder="Insira seu nome de usuário"
                        onChange={(e) => setEmail(e.target.value)}
                        width = '100%'
                        />
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>

                    <label id = {styles.labelPass}>
                        <Wrapper id = {styles.idLabelPass}>
                            <AiOutlineLock/>Senha
                        </Wrapper>

                        {!seePass ? 
                            <AiOutlineEye
                                className = {styles.eyeOpen}
                                onClick={() => {
                                    setSeePass(later => !later);
                                    refPass.current.type = "password"
                                    
                                }}
                            /> :
                            <AiOutlineEyeInvisible 
                                className = {styles.eyeClose}
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
                    <Link className = {styles.link} >Esqueci a senha.</Link>
                </Wrapper>

                <Wrapper flexDirection = 'column' width = '100%'>
                    <Button onClick={ (e) => {handleLogin(e, email, pass);}} width = '100%'>Entrar</Button>
                    <Link className = {styles.link} to = {'/Cadastro'}>Não tenho uma conta.</Link>
                </Wrapper>
           </FormComponent>
        </Section>
    )
}
export default LoginPage;