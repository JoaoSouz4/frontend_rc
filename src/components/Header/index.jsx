
import './styles.css';
import { Link } from 'react-router-dom';

 export const Header = () => {
  return (
    <header className="header-container">
        <label>João Souza</label>
  
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/Ilustracoes"}><li>Ilustrações</li></Link>
          <Link to={"/Musicas"}><li>Músicas</li></Link>
          <Link to={"/Sobremim"}><li>Sobre mim</li></Link>
          </ul>
      </header>
  );
}

