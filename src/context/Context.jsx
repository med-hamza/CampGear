
import { createContext } from "react"
import { makeServer } from '../server';
import { useState, useEffect } from "react";
export const CartContext = createContext();

export default function Context(props) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );

    console.log("cart", cart)
    
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  

    const addToCart = (product) => {
      const existingProduct = cart.find((p) => p.id === product.id);
      if (existingProduct) {
        setCart(
          cart.map((p) =>
            p.id === existingProduct.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (product) => {
      const updatedCart = cart.filter((p) => p.id !== product.id);
      setCart(updatedCart);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const cartTotal = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    const cartQuantity = cart.reduce((number , product) => {
        return number + product.quantity

    } , 0);
  
 
return(
    <>
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartQuantity   }}>
    {props.children}
    </CartContext.Provider>
    </>
)
}