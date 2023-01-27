import { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import ShoppingCartContext from '../../context/shopping-cart/ShoppingCartContext.js'
import PayPal from "../PayPal/PayPal.js";

const ShoppingCart = ( props ) => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { getProducts, products, removeProduct } = shoppingCartCtx

  const { showShoppingCart, handleCloseShoppingCart } = props
  const [ total, setTotal ] = useState( 0 )

  useEffect( () => {
    if ( !products ) {
      getProducts()
    } else {
      setTotal( 0 )
      products.forEach( product => {
        const price = parseInt( product.price )
        setTotal( ( current ) => {
          return current + price * product.quantity
        } )
      } )

    }

  }, [ products, getProducts ] )
  return (
    <Modal show={ showShoppingCart } onHide={ handleCloseShoppingCart }>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          products?.length === 0 ? 'No hay productos en el carrito'
            : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products?.map( ( product, index ) => {
                      return (
                        <tr key={ index }>
                          <td>{ index + 1 }</td>
                          <td>{ product.title }</td>
                          <td>{ product.price }</td>
                          <td>{ product.quantity }</td>

                          <td><button onClick={ ( e ) => {
                            e.stopPropagation();
                            removeProduct( product._id )
                          }
                          } ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></button></td>
                        </tr> )
                    } )
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td>TOTAL: { total }</td>
                  </tr>
                </tfoot>
              </Table>
            )
        }

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ handleCloseShoppingCart }>
          Pagar
        </Button>
       
      </Modal.Footer>
      <div>
          <PayPal/>
       </div>
    </Modal>
  )
}

export default ShoppingCart






















// import { useReducer } from "react";
// import "./shoppingcard.css"
// import { shoppingInitialState, shoppingReducer } from "./reducers/shoppingReducer.js";
// import ProductItem from "./ProductItem.js";
// import CartItem from "./cartItem/CartItem.js"
// import { TYPES } from "./actions/shoppingAction.js";
// import PayPal from "../PayPal/PayPal.js";

// function ShoppingCard () {
//     const [state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
//     const { products,cart} = state;

//     const addToCart = (id) => {
//         console.log(id);
//         dispatch({type:TYPES.ADD_TO_CART,payload:id});
//     }

//     const delFromCart = (id,all = false) => {
//         console.log(id,all);
//         if(all) {
//             dispatch({type:TYPES.REMOVE_ALL_FROM_CART,paylod:id})
//         }else {
//             dispatch({type:TYPES.REMOVE_ONE_FROM_CART,paylod:id})
//         }
//     };

//     const clearCart = () => {
//         dispatch({type:TYPES.CLEAR_CART});
//     };

//     return (
//         <section>
//             <h1>Carrito compra</h1>
//             <h3>Productos</h3>
//             <article className="box grid-responsive">
//                 {products.map((product) => (
//                 <ProductItem key={product.id} data={product} addToCart={addToCart}/>
//                 ))}
//             </article>
//             <h3>Carrito</h3>
//             <article className="box">
//                 <button onClick={clearCart}>Limpiar Carrito</button>
//                 {
//                     cart.map((item,index) => 
//                     <CartItem key={index}data={item}delFromCart={delFromCart}/>)
//                 }
//             </article>
//             <div>
//              <PayPal/>
//         </div>
//         </section>
        
//     )
// }

// export default ShoppingCard;