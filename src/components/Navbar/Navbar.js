import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { CartLogo } from '../CartLogo/CartLogo';


export const Navbar2 = () => {
  return (
    <header className='header'>
      <h1 className='header__tittle'>HARDWARE WORLD</h1>
      <Navbar className='navbar' bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Productos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"> Nuestros Sponsor</Nav.Link>
              <Nav.Link href="#link">Quienes somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartLogo/>
        </Container>
      </Navbar>
    </header>
  );
}

