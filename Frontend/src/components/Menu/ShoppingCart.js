import React from "react";
//import { useContext } from "react"
//import CartContext from './Context/ShoppingCartContext';



export const Shoppingcart = () => {
   /* const [cart, setCart]= useContext(CartContext);
    
    /*const removeItem = (id) => {
    
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      };
    
    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
      };*/
    
    return <div> Shopping cart component</div>;

};



export default   Shoppingcart;

