import { createContext, useState, useRef } from "react";

export const AlertContext = createContext();

export function AlertProvider({children}){

    const refAlert = useRef();
    const refSubmit = useRef();

    const [ requestAlert, setRequestAlert ] = useState(
        {
            isSucess : false,
            message : null
        }
    )

    const openAlert = (isSucess, message) => {
        refAlert.current.style.display = 'flex'
        refSubmit.current.disabled = true;
        setRequestAlert({isSucess: isSucess, message: message})
        closeAlert();
    }

    const closeAlert = () => {
        setTimeout( () => {
            setRequestAlert({isSucess: false, message: null});
            refSubmit.current.disabled = false;
            refAlert.current.style.display = 'none';
        }, 3000);
    }

    return (
        <AlertContext.Provider value = {{requestAlert, openAlert, refAlert, refSubmit}}>
            {children}
        </AlertContext.Provider>
    )
}
