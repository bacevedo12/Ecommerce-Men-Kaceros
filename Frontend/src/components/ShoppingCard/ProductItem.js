import "./shoppingcard.css"
import ShoppingCard from "./ShoppingCart.js"

export const ProductItem = ({data, addToCart}) => {
    let{id,name,price} = data;
    return(
        <div className="cardCarritoCompra" style={{border:"thin solid gray", paddind:"1rem"}} >
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={()=>addToCart(id)}>Agregar</button>

        </div>
    )
}

export default ProductItem