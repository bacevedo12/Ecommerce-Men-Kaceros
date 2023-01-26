import { useReducer } from "react";
import "./shoppingcard.css"
import { shoppingInitialState, shoppingReducer } from "./reducers/shoppingReducer.js";
import ProductItem from "./ProductItem.js";
import CartItem from "./cartItem/CartItem.js"
import { TYPES } from "./actions/shoppingAction.js";
import PayPal from "../PayPal/PayPal.js";

function ShoppingCard () {
    const [state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products,cart} = state;

    const addToCart = (id) => {
        console.log(id);
        dispatch({type:TYPES.ADD_TO_CART,payload:id});
    }

    const delFromCart = (id,all = false) => {
        console.log(id,all);
        if(all) {
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,paylod:id})
        }else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,paylod:id})
        }
    };

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };

    return (
        <section>
            <h1>Carrito compra</h1>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map((product) => (
                <ProductItem key={product.id} data={product} addToCart={addToCart}/>
                ))}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item,index) => 
                    <CartItem key={index}data={item}delFromCart={delFromCart}/>)
                }
            </article>
            <div>
             <PayPal/>
        </div>
        </section>
        
    )
}

export default ShoppingCard;