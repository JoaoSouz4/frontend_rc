import React, { createContext, useState, useEffect} from 'react';
import { LoaderComponent } from "../components/LoaderComponent"
import { useNavigate } from 'react-router-dom';
import _default from '../config/default';

export const Context = createContext();
export function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);
    const [userLog, setUserLog] = useState('')
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const tokenP = JSON.parse(token)

        if(token){
            fetch(`http://localhost:8001/auth`, {
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
        
        fetch("http://localhost:8001/login", {
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
        return <LoaderComponent/>
    }

    return(
        <Context.Provider value = {{authenticated, userLog, handleLogin, loading, handleLogout}}>
            {children}
        </Context.Provider>
    )   
}

