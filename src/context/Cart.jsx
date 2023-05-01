import remove from "../assest/img/remove-icon.svg"
import { useContext } from "react"
import { CartContext } from "../context/Context"

export default  function Cart() {

    const { cart, removeFromCart, cartTotal, cartQuantity } = useContext(
        CartContext
      );


    return (
        <>
         <div className="section_cart">
          <div className="title_cart mt-5 mb-4">
      <h1 className="text-center">BAG</h1> <p className="qt_bag mb-0"> {cartQuantity} items  </p>
      </div>
      {cart.length === 0 ? (
        <h2 className="text-center mb-4">Your cart is empty.</h2>
      ) : (
        <>
          <div className="box_cart mb-3">
            {cart.map((product) => (
              <div className="item_cart d-flex mb-4" key={product.id}>
                <div className="col-5">
                <div>           
                 <img className="cart_pict" src={product.imageUrl} alt={product.name} />
                 </div>
                 </div>
                   <div className="cart_details col-7">
                   <h3> {product.name} </h3> 
                   <p className="mb-3"> USD ${product.price} </p>
                   <p className="mb-3"> GENDER : {product.gender} </p>
                   <p className="mb-0">QUANTITY: {product.quantity} </p>
                   {/* {product.quantity} - ${product.price * product.quantity}{" "} */}
                   </div>
                   <div className="cart_remove"> <button onClick={() => removeFromCart(product)}> <img className="remove_item" src={remove} alt="remove item CampGear" /> <span> </span></button> </div>
              </div>
             
               
            ))}
             
          </div>
          <div className="tot_cart text-center "> <p>Total: USD ${cartTotal}</p></div>
         
          {/* <button onClick={() => clearCart()}>Clear Cart</button> */}
        </>
      )}
    </div>
    
        </>
    )
}