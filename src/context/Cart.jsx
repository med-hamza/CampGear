
import { useContext, useState } from "react"
import { CartContext } from "../context/Context"

export default  function Cart() {

    const { cart, removeFromCart, clearCart, cartTotal } = useContext(
        CartContext
      );


    return (
        <>
         <div>
      <h1>SHOPPING CART</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img className="cart_pict" src={product.imageUrl} alt={product.name} />

                <h3> {product.name} </h3> 
                 {product.quantity} - ${product.price * product.quantity}{" "}
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${cartTotal}</p>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </>
      )}
    </div>
    
        </>
    )
}