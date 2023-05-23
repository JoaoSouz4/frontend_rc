import _default from '../../services/default';

//Hooks
import { useState, useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/authContext';
//Icons
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

//Components
import Title from '../../components/Title';
import Input from '../../components/input';
import Button from '../../components/Button/button';
import MainContainer from '../../components/mainContainer'
import FormComponent from '../../components/FormComponent';
import WrapperAlert from '../../components/WrapperAlert';
import Alert from '../../components/Alert';
import WrapperForm from '../../components/WrapperForm';
import { SeePass } from './styles';


export default function Cadastro() {

    const { refAlert, refSubmit, setRequestAlert, requestAlert} = useContext(Context);
    const [ seePass, setSeePass] = useState(true);
    const [ form, setForm] = useState(
        {
            name: '',
            email: '',
            pass: '',
            cPass: ''
        }
    )
    const refPass = useRef();
    const refCPass = useRef();

    const handleRegister = (e, form) => {
        e.preventDefault();

        const { name, email, pass, cPass } = form;

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
                refSubmit.current.disabled = false;
                setRequestAlert({isSucess: resp.isSucess, message: resp.message});

                return setTimeout(()=> {
                    refAlert.current.style.display = 'none'
                    setRequestAlert({isSucess: false, message: null});
                }, 4000); 
            }
                
            setRequestAlert({isSucess: resp.isSucess, message: resp.message});
            refSubmit.current.disabled = false;
                
            setTimeout(()=> {
                refAlert.current.style.display = 'none'
                setRequestAlert({isSucess: false, message: null});
            }, 2000);

            window.location.href = "/"
        }
        )
    }

    return (
        <MainContainer>

            <WrapperAlert ref = {refAlert}>
                <Alert 
                    isSucess = {requestAlert.isSucess} 
                    message = {requestAlert.message}
                />
            </WrapperAlert>

            <FormComponent>
                <Title color = 'var(--color-secundary)' size = '1.8rem' align = 'center'>Cadastro de Usuário</Title>

                    <WrapperForm>
                        <label>
                            <AiOutlineUser/>
                            Nome de usuário
                        </label>

                        <Input
                            type = "text" 
                            placeholder = "Crie um nome de usuário"
                            onChange = {(e) => setForm( { ...form, name: e.target.value})}
                        />
                    </WrapperForm>

                    <WrapperForm>
                        <label>
                            <AiOutlineMail/>
                            Email
                        </label>
                        <Input 
                            type = "email" 
                            placeholder = "Insira seu melhor email"
                            onChange = {(e) => setForm( { ...form, email: e.target.value})}
                            width = '100%'
                        />
                    </WrapperForm>

                    <WrapperForm position = 'relative'>
                        <label>
                            <div>
                                <AiOutlineLock/>
                                Crie uma senha
                            </div>
                        
                            <SeePass>
                                {!seePass ? 
                                        
                                    <AiOutlineEyeInvisible 
                                        onClick={() => {
                                            setSeePass(later => !later);
                                            refPass.current.type = "text"
                                            refCPass.current.type = "text"
                                        }}
                                    /> 
                                :
                                    <AiOutlineEye
                                        onClick={() => {
                                            setSeePass(later => !later)
                                            refPass.current.type = "password"
                                            refCPass.current.type = "password"
                                            }}
                                        />
                                    }
                            </SeePass>
                        </label>
                        
                        <Input
                            ref = {refPass} 
                            type = "password" 
                            placeholder = "crie uma senha"
                            onChange = {(e) => setForm( { ...form, pass: e.target.value})}
                        />
                    </WrapperForm>

                    <WrapperForm>
                        <label><AiOutlineLock/>Confirmar senha</label>
                        <Input
                            ref = {refCPass}
                            type="password" 
                            placeholder="Reescreva a senha criada"
                            onChange = {(e) => setForm( { ...form, cPass: e.target.value})}
                        />
                    </WrapperForm>

                    <Button
                        ref = {refSubmit}
                        type="submit"
                        width = '100%'
                        onClick={ 
                            (e) => {
                                refSubmit.current.disabled = true;
                                refAlert.current.style.display = 'flex';
                                handleRegister(e, form)
                            }
                        }
                    >Cadastrar
                    </Button>
                    <Link to = {"/Login"}>Já possui uma conta?</Link>
            </FormComponent>
        </MainContainer>
    )
}