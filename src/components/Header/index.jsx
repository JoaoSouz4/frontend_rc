
import styles from './Header.module.css'
import { GrMenu  } from 'react-icons/gr'
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiPencilAlt } from "react-icons/hi";
import { IoMdArrowDropleft } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { useRef, useState, useContext} from 'react';
import HeaderMenu from './header';
import HeaderMenuMobile from './Mobile/Mobile';
import { Context } from '../../context/authContext';
import { IoExitOutline } from 'react-icons/io5';

 export const Header = () => {
  const menu = useRef();
  const [menuBurguer, setMenuBurguer] = useState(false);
  const {handleLogout} = useContext(Context);
  const {userLog, authenticated} = useContext(Context);

  const handleClick = () => {
    if(!menuBurguer){
      menu.current.style.animationName = "open";
      setMenuBurguer(true);
      return;
    }
    if (menuBurguer) return handleClose()
  }

  const handleClose = () => {
    menu.current.style.animationName = "close"
    setMenuBurguer(false);
 }
  return (

      <>
        <HeaderMenu>
          <div className='logo-space'>
            {menuBurguer && <IoMdArrowDropleft onClick={handleClick}/>}
            {!menuBurguer && <GrMenu className='menu-icon' onClick={handleClick}/>}
            <label>João Souza</label>
          </div>

          <ul id='list-nav'>
            <Link to={"/"}>Home</Link>
            <Link to={"/Ilustracoes"}>Ilustrações</Link>
            <Link to={"/Sobremim"}>Sobre o dev</Link>
          </ul>
          {
            authenticated ?
            <>
              <div className={styles.userLogoArea}>
                <span className={styles.label}>{userLog.userName}</span>
                <span className = {styles.exit} onClick = {handleLogout}>Sair</span>
              </div>
            </>
            :
             <Link className = {styles.loginName} to = {'/Login'}>Login</Link>
          }
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
                    handleClose();
                    handleLogout();
                  }
                  }
                ><IoExitOutline/>Sair</Link> 
              : <Link to={"/Login"}><FaUser/>Login</Link>
            }
          </ul>
        </HeaderMenuMobile>
      </>

  );
}

