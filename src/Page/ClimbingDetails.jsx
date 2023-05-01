
import iconarrow from "../assest/img/left-arrow.svg"
import { useContext  } from "react"
import { Link, Outlet , useLocation, NavLink} from "react-router-dom"
import { useParams , useSearchParams,  useLoaderData } from "react-router-dom"
import { CartContext } from "../context/Context"


import { getClimbing } from "../api";

export function loader({params}) {

    return getClimbing(params.id) 
}

export default function ClimbingDetails() {

  const product = useLoaderData()


  console.log("daezdazdazAAAAA", product)
  
  const { addToCart } = useContext(CartContext);

    const params = useParams()
    console.log(params)
    const [searchpram , setsearchparam] = useSearchParams()

   
    const typefilter = searchpram.get("sec_style")
  

    const location = useLocation()

    const search = location.state?.search ||""

    const back = location.state.sec_style 

    console.log("laoca", location)

    console.log("search",search)

    // useEffect(() => {
    //     fetch(`/api/climbing/${params.id}`)
    //         .then((rep) => rep.json())
    //         .then(data => setHikingdeta(data.products))
    // }, [params.id])


    const sublink= {
      fontWeight:"bold",
      textDecoration: "underline",
      color: "#ca3c66",
   }
    return (


        <>
          <div className="container">
                <div className="wise_datails mt-3 mb-5">
               

               {back ? (
                <div className="mb-3"> 
                 <Link to={`..${search}`}
                 relative="path"
                 className="back_product">
                      <img src={iconarrow} alt="back to product" />
                    Back to {back}
              </Link> 
              </div>
               ):
               <div className="mb-3"> 
               <Link to={`/${product.type}`}
                className="back_product"> 
                 <img src={iconarrow} alt="back to product"  />
                  Back
                </Link> 
                </div>
                }

                
                        <div className="box_details" key={product.id}>
                            <div className="d-flex">
                            <div className="pic_det col-5">
                                <div className="first_pict">
                                <img src={product.imageUrl} alt={product.name} />
                                </div>
                            </div>
                            <div className="details mt-5 col-7">
                                <div className="type_detials"> <span> {product.type}</span> </div>
                                <h1 className="title_details"> {product.name} </h1>
                                <p className="price_details"> USD ${product.price} </p>
                                <button className="mb-3 mt-3" onClick={() => addToCart(product)}>Add to Cart</button>

                                <div className="menu_detials desktop">
                                 <nav>
                                  <NavLink end  style={({isActive}) =>isActive ? sublink : null }   to="." state={{ sec_style: typefilter }}> Description</NavLink>

                                  <NavLink  style={({isActive}) =>isActive ? sublink : null }   to="materials" state={{ search: `?${searchpram.toString()}`, sec_style: typefilter }}>Materials</NavLink>

                                  <NavLink  style={({isActive}) =>isActive ? sublink : null }  to="technology" state={{  sec_style: typefilter }}> Technology </NavLink>


                                 </nav>
                                 <div className="mt-2">
                                 <Outlet context={{ product }} />
                                 </div>
                                </div>

                            </div>
                            </div>
                            <div className="second_pict">
                                  
                                  {product.id==="1" ? (
                                    <div className="d-flex">
                                      <div>
                                        <img src={product.allimg.image2} alt="desc" />
                                      </div>
                                      <div>
                                      <img src={product.allimg.image3} alt="des" />
                                        </div>
                                    </div>   
                                  ):
                                  null
                                  }

                                </div>
                                <div className="menu_detials tab_mob">
                                 <nav>
                                  <NavLink end  style={({isActive}) =>isActive ? sublink : null }   to="." state={{ sec_style: typefilter }}> Description</NavLink>

                                  <NavLink  style={({isActive}) =>isActive ? sublink : null }   to="materials" state={{ search: `?${searchpram.toString()}`, sec_style: typefilter }}>Materials</NavLink>

                                  <NavLink  style={({isActive}) =>isActive ? sublink : null }  to="technology" state={{  sec_style: typefilter }}> Technology </NavLink>


                                 </nav>
                                 <div className="mt-2">
                                 <Outlet context={{ product }} />
                                 </div>
                                </div>
                        </div>
                 
                    
                </div>
            </div>
        
        </>
    )
}