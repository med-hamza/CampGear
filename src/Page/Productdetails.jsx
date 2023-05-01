
import iconarrow from "../assest/img/left-arrow.svg"
import { useContext } from "react"
import { Link} from "react-router-dom"
import { useParams , useLoaderData } from "react-router-dom"
import { CartContext } from "../context/Context"
import { getHomePage } from "../api"

export function loader({ params }) {
    return getHomePage(params.id)
  }

export default function Productdetails() {
    
    const { addToCart } = useContext(CartContext);
    const params = useParams()
    console.log(params)

    const product = useLoaderData()
  

    return (
        <>
             <div className="container">
                <div className="wise_datails mt-3 mb-5">

                
               <div className="mb-3"> 
               <Link to="/" 
                   className="back_product">
                      <img src={iconarrow} alt="back to product"  />
                  Back
                </Link>
                </div>
                 

               
                        <div className="box_details" key={product.id}>
                            <div className="d-flex">
                            <div className="pic_det col-5">
                                <div className="first_pict">
                                <img src={product.imageUrl} alt={product.name} />
                                </div>
                            </div>
                            <div className="details mt-5  col-7">
                                <div className="type_detials"> <span> {product.type}</span> </div>
                                <h1 className="title_details"> {product.name} </h1>
                                <p className="price_details">USD ${product.price} </p>

                                <button className="mb-3 mt-3" onClick={() => addToCart(product)}>Add to Cart</button>
                               

                            </div>
                            </div>
                            <div className="second_pict">
                                  
                                  {product.id==="1" ? (
                                    <div className="d-flex">
                                      <div>
                                        <img src={product.allimg.image2} alt="des" />
                                      </div>
                                      <div>
                                      <img src={product.allimg.image3} alt="des" />
                                        </div>
                                    </div>   
                                  ):
                                  null
                                  }

                                </div>
                               
                                
                        </div>
                   
                </div>
            </div>
        
        </>
    )
}