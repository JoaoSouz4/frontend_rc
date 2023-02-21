
import './styles.css';

import { GrMenu  } from 'react-icons/gr'
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { HiPencilAlt } from "react-icons/hi";

import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

 export const Header = () => {
  const menu = useRef();
  const [menuBurguer, setMenuBurguer] = useState(false);

  const closeMenu = ()=>{
    setMenuBurguer(false);
    menu.current.style = "none";
    return;
  }

  return (
    <>
    <header className="header-container">

        <nav>
          <div className='logo-space'>

            <GrMenu className='menu-icon' onClick={()=>{
              if(!menuBurguer){
                menu.current.style.display = "flex";
                setMenuBurguer(true);
                return;
              }
              else {
                menu.current.style.display = "none";
                setMenuBurguer(false);
                return;
              }
            }}/>

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
            <Link to={"/"} className='navegation-links'  onClick= {closeMenu}>
              <AiFillHome className='navegation-links-icon'/>
              <li>Home</li>
            </Link>

            <Link to={"/Ilustracoes"} className='navegation-links' onClick= {closeMenu}>
              <HiPencilAlt className='navegation-links-icon'/>
              <li>Ilustrações</li>
            </Link>

            <Link to={"/Musicas"} className='navegation-links' onClick= {closeMenu}>
              <BsMusicNoteBeamed className='navegation-links-icon'/>
              <li>Músicas</li>
            </Link>

            <Link to={"/Sobremim"} className='navegation-links' onClick= {closeMenu}>
              <HiOutlineInformationCircle className='navegation-links-icon'/>
              <li>Sobre mim</li>
            </Link>
          </ul>
        </div>

      </header>
    </>

  );
}

