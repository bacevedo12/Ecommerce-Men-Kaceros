import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import './navbar.css'
import logo from "../components/imagenes/logo-removebg-preview.png"
import Footer from "./Footer";


const NavBarComercio= () => {
  return (
    <>
    <div className="container text-dark justify-content-start">
    
      <Navbar className="navBar text aling-between" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >
          <img alt="logo"src={logo} className="imagenLogo imag-fluid"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav alicn itemNavBar">
          <Nav className="fw-bold fs-5 itemNav ">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Menú</Nav.Link>
            <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
            <Nav.Link as={Link} to="/Miperfil">Mi perfil</Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
          <Nav>

          <Nav.Link as={Link} to="/ShoppingCard"><i className="fa-sharp fa-solid fa-cart-shopping fs-3 me-3 text-light"></i></Nav.Link>         
          <Nav.Link as={Link} to="/IniciarSesion"><i className="fa-sharp fa-solid fa-user fs-3 me-3 text-light"></i></Nav.Link>         

          </Nav>
        </Container>
      </Navbar>  

      <section className="container p-0 m-0">
        <Outlet></Outlet>
      </section>

      <Footer/>
      
    </div>
    </>
  );
}

export default NavBarComercio;