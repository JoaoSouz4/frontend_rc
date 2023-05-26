import { GrMenu  } from 'react-icons/gr'
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiPencilAlt } from "react-icons/hi";
import { IoMdArrowDropleft } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5';

import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useContext} from 'react';
import { Context } from '../../context/authContext';
import { Spinner } from 'reactstrap';
import {HeaderMenu, ListNav, LogoArea, MenuBarIcon, HeaderMenuMobile} from './styles'
import DropDown from './DropDown/DropDown';


 export const Header = () => {
  const menu = useRef();
  const navigate = useNavigate();
  const [menuBurguer, setMenuBurguer] = useState(false);
  const {userLog, authenticated, handleLogout} = useContext(Context);

  const handleClick = () => {
    if(!menuBurguer){
      menu.current.style.animationName = "open";
      return setMenuBurguer(true);
    }
    return handleClose()
  }

  const handleClose = () => {
    menu.current.style.animationName = "close"
    setMenuBurguer(false);
 }
  return (

      <>
        <HeaderMenu>
          
          <LogoArea>
            <MenuBarIcon>
              {menuBurguer ?
                <IoMdArrowDropleft onClick={handleClick}/>
              :
                <GrMenu onClick={handleClick}/>
              }
            </MenuBarIcon>
            <label>João Souza</label>
          </LogoArea>

          <ListNav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Ilustracoes"}>Ilustrações</Link>
            <Link to={"/Sobremim"}>Sobre o dev</Link>
          </ListNav>
          
          <DropDown/>
          
        </HeaderMenu>


        <HeaderMenuMobile ref = {menu}>
          <ul>
            <Link to={"/"} onClick={handleClose}><AiFillHome/>Home</Link>
            <Link to={"/Ilustracoes"} onClick={handleClose} ><HiPencilAlt />Ilustrações</Link>
            <Link to={"/Sobremim"} onClick={handleClose}><HiOutlineInformationCircle/>Sobre mim</Link>
            
            {
              authenticated ? 
                <Link 
                  onClick={() => {
                    handleLogout();
                    navigate('/')
                    handleClose();
                  }
                  }
                ><IoExitOutline/>Sair</Link> 
              : <Link to={"/Login"} onClick={handleClose}><FaUser/>Login</Link>
            }
          </ul>
        </HeaderMenuMobile>
      </>

  );
}

