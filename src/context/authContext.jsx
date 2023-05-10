import React, { createContext, useState, useEffect, useRef} from 'react';
import { Spinner } from 'reactstrap';
import _default from '../config/default';
import Wrapper from '../components/div';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();
export function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [userLog, setUserLog] = useState('')
    const [loading, setLoading] = useState(true);

    const [ requestIsSucess, setRequestIsSucess ] = useState();
    const [ requestMessage, setRequestMessage ] = useState();

    const refAlert = useRef();
    const refSubmit = useRef();

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token)

        if(token){
            fetch( `${_default.urlApi}/auth`,{
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + tokenP
                }
            }).then(res => res.json()).then(res => {
                console.log(res);
                setAuthenticated(true);
                setUserLog(res.authData);
            });
        }
        setLoading(false);
    }, [])

    function handleLogin(e, name, pass){
        e.preventDefault();
        
        fetch(`${_default.urlApi}/login`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: name,
                userPass: pass
            })
        }).then(resp => resp.json())
          .then(resp => {
            if(resp.isSucess){

                localStorage.setItem('token', JSON.stringify(resp.token));
                setRequestMessage(resp.message);
                setRequestIsSucess(resp.isSucess);
                setAuthenticated(true);
                refSubmit.current.disabled = false;
                window.location.href = "/"

                setTimeout(()=> {
                    refAlert.current.style.display = 'none'
                    setRequestMessage("");
                    setRequestIsSucess("");
                }, 1000)

            } else {
                
                setRequestMessage(resp.message);
                setRequestIsSucess(resp.isSucess);
                refSubmit.current.disabled = false;
                setTimeout(()=> {
                    refAlert.current.style.display = 'none'
                    setRequestMessage("");
                    setRequestIsSucess("");
                }, 4000)
            }
        }).catch(e => {console.log("ERRO" + e)})
    }

    function handleLogout(){

        localStorage.removeItem('token');
        setAuthenticated(false);
        navigate("/");
        setLoading(false);
    }

    if (loading) {
        return <Wrapper height = '100vh' width = '100vw' jc = 'center' alignItems = 'center' flexDirection = 'column' gap = '1rem'>
                    <Spinner color = 'secundary' type = 'grow'/>
                    Autenticando usuário...
                </Wrapper>
    }

    return(
        <Context.Provider value = {
            {
                authenticated, 
                userLog, 
                handleLogin, 
                loading, 
                handleLogout, 
                requestIsSucess, 
                requestMessage, 
                setRequestIsSucess, 
                setRequestMessage, 
                refAlert, 
                refSubmit
            }
        }>
            {children}
        </Context.Provider>
    )   
}

