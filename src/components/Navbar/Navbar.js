
import './Navbar.css'
import { CartLogo } from '../CartLogo/CartLogo';
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <header className='header'>
      <h1 className='header__tittle'>HARDWARE WORLD</h1>
  
      <nav className="navbar">
      <Link to='/' className="navbar__link">Inicio</Link>
      <Link to='/productos/Mother' className="navbar__link">Mother</Link>
      <Link to='/productos/Fuente' className="navbar__link">Fuente</Link>
      <Link to='/productos/Memoria' className="navbar__link">Memoria</Link>
      <Link to='/productos/Procesador' className="navbar__link">Procesador</Link>
      <p className="navbar__link"> Nuestros Sponsor</p>
      <p className="navbar__link">Quienes somos</p>
      <CartLogo/>
      </nav>
          
          
        
    </header>
  );
}

