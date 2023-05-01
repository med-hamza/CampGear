import bag from "../assest/img/sac.svg"
import trash from "../assest/img/icons-trash.svg"
import { useContext, useState } from "react"
import { CartContext } from "../context/Context"
import { Link } from "react-router-dom";

export default function Cart() {

    
    const maxLength = 16;

    const { cart, removeFromCart, cartTotal, cartQuantity } = useContext(
        CartContext
    );

    const [show, setShow] = useState(false);


    console.log("cart quantity", cartQuantity)



    return (

        <>
            <div>
                <div className="dropdown"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    <button

                        className="dropdown-toggle" type="button" id="MenuButton">
                            <img src={bag} alt="sac CampWise" />
                            <span className="qty_bag">
                        {cartQuantity}
                        </span>
                    </button>
                    <ul class="dropdown-menu" style={show ? { display: "block" } : { display: "none" }} >
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <>

                                <div className="cart_popup">
                                    {cart.map((product) => (
                                        <div key={product.id} className="item-cart">
                                            <img src={product.imageUrl} alt={product.name} />
                                            <div className="title_price_cart">
                                                <p className="title_cart mb-0"> 
                                                {product.name.length > maxLength ? product.name.substring(0, maxLength) + "..." : product.name}
                                                </p>
                                                <span className="mb-0">   ${product.price} </span>  <span> Qty: {product.quantity} </span>  
                                            </div>
                                            <div className="cart_trash">
                                            <button className="trash" onClick={() => removeFromCart(product)}> <img src={trash} alt="trash CampGear" /> </button>
                                            </div>
                                          
                                        </div>
                                    ))}
                                </div>
                                  <div className="cart_total mt-2 mb-2">
                                   <div className="number_article">
                                
                                    <p className="mb-0"> {cartQuantity} Article </p>
                                 
                                   </div>
                                   <div className="total_article">
                                   <p className="mb-0">Total: ${cartTotal}</p>
                                   </div>
                                  </div>

                                  <div className="btn_viewcart">
                                  <Link to="/cart"> View Cart </Link>
                                  </div>
                              
                                {/* <button onClick={() => clearCart()}>Clear Cart</button> */}
                            </>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}