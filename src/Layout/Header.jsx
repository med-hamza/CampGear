
import logo from "../assest/img/campwise.svg"
import { Link, NavLink } from "react-router-dom"
import CartIcon from "../context/CartIcon";
import { CartContext } from "../context/Context"
import { useContext } from "react"


export default function Header() {
  const { addToCart } = useContext(CartContext);

  return (
    <>

      <div className="top_nav">

        <p className="mb-0">  Handmade in Tunisia $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG WITH PURCHASES $250+.</p>
      </div>
      <nav className="nav_wise">
        <div className="container">
          <div className="d-flex align-items-center justify-content-space-between">
           <div>
          <Link to="/"> <img src={logo} alt="CampGear" className="logo" /></Link>
          <NavLink  to="/shop"  className={({isActive}) => isActive ? "wise_link" : null }  >  SHOP </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "wise_link" : null }   > About </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "wise_link" : null }  > Contact </NavLink>
          <NavLink to="/cart"  className={({isActive}) => isActive ? "wise_link" : null }   >Cart </NavLink> 
          </div>
          <div>
         <CartIcon />
         </div>
        </div>
        </div>
      </nav>



    </>
  )
}