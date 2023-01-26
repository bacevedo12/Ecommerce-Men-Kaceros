import Card from 'react-bootstrap/Card';
import React  from "react";
import './Platos.css';
//import { Cartcontext } from './Context/CartContext';

//import { useState, useEffect } from 'react';


import { Navigate, useNavigate } from 'react-router-dom';


const Platos = ({items, addToCart}) =>{

    
//    const [cart, setCart]= useContext(Cartcontext);

//     const addToCart = () => {
//       setCart((currItems) => {
//         const isItemsFound = currItems.find((item) => item.id === id);
//         if (isItemsFound) {
//           return currItems.map((item) => {
//             if (item.id === id) {
//               return { ...item, quantity: item.quantity + 1 };
//             } else {
//               return item;
//             }
//           });
//         } else {
//           return [...currItems, { id, quantity: 1, price }];
//         }
//       });
//     };

//    const getQuantityById = (id) => {
//       return cart.find((item) => item.id === id)?.quantity || 0;
//     };

//     getQuantityById();

    return (
      <div className="row justify-content-center">
        {items.map((items, key)=>{       

        const {id, title, img, price} = items

        return (        
            <Card key={key} className="col-xs-12 col-lg-3 m-3  colorcard" style={{ width: '18rem' }} >
                <Card.Body>
                <Card.Title className='titulo'><h3>{title}</h3></Card.Title>
                <Card.Img className='img_menu py-2' variant="top" src={img} alt={title}  />
                <Card.Text className='desc'>
                  <h5>Precio</h5>
                   $ {price}
                </Card.Text>

                <button type="button" className="boton">Ver Descripción</button>
                {/* <button type="button" className="boton m-1" onClick={() => addToCart(id)}>+ Agregar al Carrito</button> */}

                <button onClick={() => Navigate} type="button" className="boton">Visualizar</button>

              </Card.Body>
            </Card>
        )
        })}
      
    </div>
    )
 }

export default Platos

//
