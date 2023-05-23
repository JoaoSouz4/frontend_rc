

import { Item, ItemDivisor, List, DropDownContainer } from './styles';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';

import { useState, useRef, useContext } from 'react';
import { Context } from '../../../context/authContext';

function DropDown(){ 
    const listRef = useRef();
    const { authenticated, userLog, handleLogout} = useContext(Context);
    const [ isOpen, setIsOpen] = useState(false);

    const open = () => {
        listRef.current.style.display = 'flex';
        setIsOpen(later => !later);
    }

    const close = () => {
        listRef.current.style.display = 'none';
        setIsOpen(later => !later);
    }

    const handleClick = () => {
        if(!isOpen) return open(); 
        close();
    }

    return (

        <DropDownContainer>
            {
                !authenticated ?
                <>
                    <label> <FaUser/> Entrar</label>
                    <button onClick = {handleClick}>
                        <RiArrowDownSFill/>
                    </button>
                    <List ref = {listRef}>
                        <Link to = {'/Login'} onClick = {close}>
                            <Item >  Login</Item>
                        </Link>
                        <ItemDivisor/>
                        <Link to = {'/Cadastro'} onClick = {close}> 
                            <Item>Cadastro</Item>
                        </Link>
                    </List>
                </>
                : 
                <>
                    <label> <FaUser/> {userLog.userName}</label>
                    <button onClick = {handleClick}>
                        <RiArrowDownSFill/>
                    </button>
                    <List ref = {listRef}>
                        <Link to = {'/Login'} onClick = {() => {
                            close();
                            handleLogout();
                        }}>
                            <Item >Sair</Item>
                        </Link>
                    </List>
                </>
            }
        </DropDownContainer>
    )
}

export default DropDown;