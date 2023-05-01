
import logo from "../assest/img/campwise.svg"
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"
import CartIcon from "../context/CartIcon";
import { CartContext } from "../context/Context"
import { useContext } from "react"


export default function Header() {
  const { addToCart } = useContext(CartContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  

  return (
    <>

      <div className="top_nav">

        <p className="mb-0">  Handmade in Tunisia $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG WITH PURCHASES $250+.</p>
      </div>
      <nav className={`nav_wise ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-space-between">
           <div>
          <Link to="/"> <img src={logo} alt="CampGear" className="logo" /></Link>
          <NavLink  to="/shop"  className={({isActive}) => isActive ? "wise_link" : null }  >  SHOP </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "wise_link" : null }   > About </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "wise_link" : null }  > Contact </NavLink>
          <NavLink to="/cart"  className={({isActive}) => isActive ? "wise_link" : null }   >Bag </NavLink> 
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