
import './styles.css';

import { GrMenu  } from 'react-icons/gr'
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { HiPencilAlt } from "react-icons/hi";
import { IoMdArrowDropleft } from 'react-icons/io'

import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

 export const Header = () => {
  const menu = useRef();
  const [menuBurguer, setMenuBurguer] = useState(false);

  const handleClick = () => {
    if(!menuBurguer){
      menu.current.style.animationName = "open";
      setMenuBurguer(true);
      return;
    }
    if (menuBurguer){
      handleClose()
      return;
    }
  }

  const handleClose = () => {
    menu.current.style.animationName = "close"
    setMenuBurguer(false);
 }
  return (
    <>
    <header className="header-container">

        <nav>
          <div className='logo-space'>
            {menuBurguer && <IoMdArrowDropleft className='menu-icon' onClick={handleClick}/>}
            {!menuBurguer && <GrMenu className='menu-icon' onClick={handleClick}/>}

            <div className="logo">João Souza</div>
          </div>

          <ul id='list-nav'>
            <Link to={"/"} className='navegation-links'><li>Home</li></Link>
            <Link to={"/Ilustracoes"} className='navegation-links'><li>Ilustrações</li></Link>
            <Link to={"/Musicas"} className='navegation-links'><li>Músicas</li></Link>
            <Link to={"/Sobremim"} className='navegation-links'><li>Sobre mim</li></Link>
          </ul>
        </nav>

        <div className='mobile-menu' ref = {menu}>
          <ul>
            <Link to={"/"} className='navegation-links' onClick={handleClose}>
              <AiFillHome className='navegation-links-icon'/>
              <li>Home</li>
            </Link>

            <Link to={"/Ilustracoes"} className='navegation-links'  onClick={handleClose} >
              <HiPencilAlt className='navegation-links-icon'/>
              <li>Ilustrações</li>
            </Link>

            <Link to={"/Musicas"} className='navegation-links'  onClick={handleClose}>
              <BsMusicNoteBeamed className='navegation-links-icon'/>
              <li>Músicas</li>
            </Link>

            <Link to={"/Sobremim"} className='navegation-links'  onClick={handleClose}>
              <HiOutlineInformationCircle className='navegation-links-icon'/>
              <li>Sobre mim</li>
            </Link>
          </ul>
        </div>

      </header>
    </>

  );
}

