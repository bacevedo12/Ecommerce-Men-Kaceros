import { Navbar, Nav, Badge, Button, Container } from "react-bootstrap";
import React, { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css'
import logo from "../components/imagenes/logo-removebg-preview.png"
import ShoppingCartContext from "../context/shopping-cart/ShoppingCartContext.js"
import ShoppingCart from "../components/ShoppingCard/ShoppingCart.js"
import UserContext from "../context/user.context";
import Footer from "./Footer";


const NavBarComercio= () => {
  const userCtx = useContext( UserContext )
  const shoppingCartCtx = useContext( ShoppingCartContext )

  const { logout, user } = userCtx
  const { products } = shoppingCartCtx

  const [ showShoppingCart, setShowShoppingCart ] = useState( false );

  const handleCloseShoppingCart = () => setShowShoppingCart( false );
  const handleShowShoppingCart = () => setShowShoppingCart( true );

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
          <Button variant="secondary" onClick={ handleShowShoppingCart }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> <Badge bg="dark">{ products.length > 0 ? products.length : '' }</Badge>
                  </Button>
          {/* <Nav.Link as={Link} to="/ShoppingCard"><button onClick={ handleShowShoppingCart } className="fa-sharp fa-solid fa-cart-shopping fs-3 me-3 text-light"></button></Nav.Link>          */}
          <Nav.Link as={Link} to="/IniciarSesion"><i className="fa-sharp fa-solid fa-user fs-3 me-3 text-light"></i></Nav.Link>         

          </Nav>
        </Container>
      </Navbar> 
      <ShoppingCart showShoppingCart={ showShoppingCart } handleCloseShoppingCart={ handleCloseShoppingCart }>
      </ShoppingCart>

      <section className="container p-0 m-0">
        <Outlet></Outlet>
      </section>

      <Footer/>
      
    </div>
    </>
  );
}

export default NavBarComercio;