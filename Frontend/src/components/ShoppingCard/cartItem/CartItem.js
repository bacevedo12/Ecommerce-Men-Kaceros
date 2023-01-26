const CartItem = ({data,delFromCart}) => {
    let {id,name,price,quantity} = data;
    return (
        <div style={{borderBotton:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00x{quantity} = ${price*quantity}.00</h5>
            <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
            <br/>
            <button onClick={() => delFromCart(id,true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem