import { Card, Nav } from 'react-bootstrap';
import { useContext } from 'react'
import React  from "react";
import { Link } from 'react-router-dom';
import './Platos.css';
import ShoppingCartContext from '../../context/shopping-cart/ShoppingCartContext';




// const Product = ( props ) => {
//   const { product } = props
//   const shoppingCartCtx = useContext( ShoppingCartContext )
//   const { addProduct } = shoppingCartCtx

const Platos = ({items}) =>{
  // const navigate = useNavigate();

  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx

    return (
      <div className="row justify-content-center">
        {items.map((items, key)=>{       

        const {_id, title, img, price} = items

        return (        
            <Card key={key} className="col-xs-12 col-lg-3 m-3  colorcard" style={{ width: '18rem' }} >
                <Card.Body>
                <Card.Title className='titulo'><h3>{title}</h3></Card.Title>
                <Card.Img className='img_menu py-2' variant="top" src={img} alt={title}  />
                <Card.Text className='desc'>
                  <h5>Precio</h5>
                   $ {price}
                </Card.Text>

                <Nav.Link as={Link} to={`/platos/${_id}`}>
                  <button  type="button" className="boton bg-dark">Visualizar</button>
                </Nav.Link> 
                <button type="button" className="boton m-1 bg-dark" onClick={() => addProduct(items)}>+ Agregar al Carrito</button>

                

              </Card.Body>
            </Card>
        )
        })}
      
    </div>
    )
 }



export default Platos


