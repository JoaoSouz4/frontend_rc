import React, { createContext, useState, useEffect} from 'react';
import { Spinner } from 'reactstrap';
import _default from '../config/default';
import Wrapper from '../components/div';

export const Context = createContext();
export function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [userLog, setUserLog] = useState('')
    const [loading, setLoading] = useState(true);

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
                alert(resp.message);
                window.location.href = "/";
                setAuthenticated(true);
            } else {
                alert(resp.message)
            }
        }).catch(e => {console.log("ERRO" + e)})
    }

    function handleLogout(){

        localStorage.removeItem('token');
        setAuthenticated(false)
        window.location.href = "/"
        setLoading(false);
    }

    if (loading) {
        return <Wrapper height = '100vh' width = '100vw' jc = 'center' alignItems = 'center' flexDirection = 'column' gap = '1rem'>
                    <Spinner color = 'secundary' type = 'grow'/>
                    Autenticando usuário...
                </Wrapper>
    }

    return(
        <Context.Provider value = {{authenticated, userLog, handleLogin, loading, handleLogout}}>
            {children}
        </Context.Provider>
    )   
}

