

import { useContext , useState} from "react"
import { CartContext } from "../context/Context"

export default function Cart() {

    const { cart, removeFromCart, clearCart, cartTotal, cartQuantity } = useContext(
        CartContext
    );

    const [show, setShow] = useState(false);
    

    console.log("cart quantity", cartQuantity)

   

const hiddenDiv = document.getElementById('hidden-div');



    return (

        <>
            <div>
                <div className="dropdown"
                   onMouseEnter={() => setShow(true)}
                   onMouseLeave={() => setShow(false)}
                >
                    <button 
                   
                    className="btn btn-secondary dropdown-toggle" type="button" id="MenuButton">
                        {cartQuantity}
                    </button>
                    <ul class="dropdown-menu" style={show ? { display: "block" } : {display : "none"}} >
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <>
                                <ul>
                                    {cart.map((product) => (
                                        <li key={product.id}>
                                            {product.name} x {product.quantity} - ${product.price * product.quantity}{" "}
                                            <button onClick={() => removeFromCart(product)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                                <p>Total: ${cartTotal}</p>
                                <button onClick={() => clearCart()}>Clear Cart</button>
                            </>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}