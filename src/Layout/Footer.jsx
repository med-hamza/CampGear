import linkedin from "../assest/img/linkedin.svg"
import instgram from "../assest/img/instagram.svg"
import { Link } from "react-router-dom"
export default function Footer() {




    return (
        <>
         <div className="footer_wise">
          <div className="container">
            <div className="social_icon">
              <nav>
              <a href="https://www.linkedin.com/in/mohamed-hamza-trabelsi-b56193183" target="blank">
              <img src={linkedin} alt="linkedin" />
              </a>

            <a href="https://www.instagram.com/t_m_hamza/" target="blank">
              <img src={instgram} alt="instgram" />
            </a>
              </nav>
            
            </div>
        <nav className="footer_wise">
        <a href="/contact"> Contact</a>
        <Link to="/about" > About </Link>
        </nav>
            
          </div>    

          <div className="copyright">
          <p> © 2023 Mohamed Hamza Trabelsi</p>
          </div>
            
        </div>  
          
        </>
    )
}