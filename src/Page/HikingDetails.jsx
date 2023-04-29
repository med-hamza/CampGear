


import { useEffect, useState, useContext } from "react"
import { Link, Outlet , useLocation} from "react-router-dom"
import { useParams , useSearchParams, useLoaderData } from "react-router-dom"
import { CartContext } from "../context/Context"

import { getHiking } from "../api"

export function loader( {params}) {
    return  getHiking(params.id)
}


export default function HikingDetails() {

    const { addToCart } = useContext(CartContext);
    const params = useParams()
    console.log(params)

    const product = useLoaderData()


    const [searchpram , setsearchparam] = useSearchParams()
    const typefilter = searchpram.get("sec_style")

    const location = useLocation()

   

    const search = location.state?.search || ""

    const back = location.state.sec_style

    console.log("laoca", location.state)


    return (


        <>

            <div className="container">
                <div className="wise_datails mt-5 mb-5">

                {back ? (
                 <Link to={`..${search}`}
                 relative="path"
                  className="all_vans">
                    Back to {back}
              </Link> 
               ):
               <Link to={`/${product.type}`}> 
                  Back
                </Link> }

               
                        <div className="box_details" key={product.id}>
                            <div className="d-flex">
                            <div className="pic_det">
                                <div className="first_pict">
                                <img src={product.imageUrl} alt={product.name} />
                                </div>
                            </div>
                            <div className="details mt-5 p-4">
                                <div className="type_detials"> <span> {product.gender}</span> </div>
                                <h1 className="title_details"> {product.name} </h1>
                                <p className="price_details"> ${product.price} </p>

                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                                <div className="menu_detials">
                                 <nav>
                                  <Link to="." state={{ sec_style: typefilter }}> Description</Link>

                                  <Link to="materials" state={{ sec_style: typefilter }}>Materials</Link>

                                  <Link to="technology" state={{  sec_style: typefilter }}> Technology </Link>


                                 </nav>
                                 <Outlet context={{product}} />
                                </div>

                            </div>
                            </div>
                            <div className="second_pict">
                                  
                                  {product.id==="1" ? (
                                    <div className="d-flex">
                                      <div>
                                        <img src={product.allimg.image2} />
                                      </div>
                                      <div>
                                      <img src={product.allimg.image3} />
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