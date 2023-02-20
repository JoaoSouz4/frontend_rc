
import './styles.css';
import { GrMenu  } from 'react-icons/gr'
import { Link } from 'react-router-dom';

 export const Header = () => {
  return (
    <>
    <header className="header-container">

        <nav>
          <label>João Souza</label>
          <ul>
            <Link to={"/"} className='navegation-links'><li>Home</li></Link>
            <Link to={"/Ilustracoes"} className='navegation-links'><li>Ilustrações</li></Link>
            <Link to={"/Musicas"} className='navegation-links'><li>Músicas</li></Link>
            <Link to={"/Sobremim"} className='navegation-links'><li>Sobre mim</li></Link>
          </ul>
          <div className="mobile-menu-icon">
            <GrMenu className='menu-icon'/>
          </div>
        </nav>

        <div className='mobile-menu'>
        <ul>
            <Link to={"/"} className='navegation-links'><li>Home</li></Link>
            <Link to={"/Ilustracoes"} className='navegation-links'><li>Ilustrações</li></Link>
            <Link to={"/Musicas"} className='navegation-links'><li>Músicas</li></Link>
            <Link to={"/Sobremim"} className='navegation-links'><li>Sobre mim</li></Link>
          </ul>
        </div>

      </header>
      </>

  );
}

