
import { useContext, Suspense} from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { CartContext } from "../context/Context"
import Loading from "../Loading";

import { getHiking }from "../api";

export function loader() {

    return defer({ products: getHiking() })
}

export default function Hiking() {

    const dataPromise= useLoaderData()

    const { addToCart } = useContext(CartContext);


    const [searchpram , setsearchparam] = useSearchParams()
    const typefilter = searchpram.get("sec_style")


    function handelchangeparam(key, value) {

        setsearchparam(prevParam => {
            if (value === null) {
                prevParam.delete(key)
            }
            else {
                prevParam.set(key, value)
            }
            return prevParam
        })
    }


    function renderProductelement(products) {

        const listFiltre = typefilter ? products.filter(char=>char.sec_style === typefilter): products

        const listHiking = listFiltre.map(item => (
    
    
            <div key={item.id} className="wise_product">
                <div className="wise_pr">
                <div>
                  <Link to={item.id} state={{ search: `?${searchpram.toString()}`, sec_style: typefilter }} >  <img className="pic_wise" src={item.imageUrl} alt={item.name} />
                  </Link>
                  
                  </div>
                  <div className="title_wise mt-4">
                <Link to={item.id}>    <h4 className="mb-0">{item.name}</h4></Link>
                <p className="mb-2 wise_type"> {item.type} </p>
                <p  className="price"> ${item.price} </p>
                </div>
                <div className="btn_addcart">
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
               
                </div>
            </div>
        ))
    
    
        return (
    
    
            <>
              <h1> Products for Hiking </h1>
                        <nav className="filtre_shop mt-4 mb-4">
                           <button  className={`wise_filtre ${typefilter === "Backpacks & Bags" ? "selected" : ""} `}  onClick={()=>handelchangeparam("sec_style" ,"Backpacks & Bags")}> Backpacks & Bags </button>
                           <button  className={`wise_filtre ${typefilter === "Sleeping Bags" ? "selected" : ""} `}  onClick={()=>handelchangeparam("sec_style" ,"Sleeping Bags")}> Sleeping Bags </button>
                           <button className={`wise_filtre ${typefilter === "Mini Bags" ? "selected" : ""} `}  onClick={()=>handelchangeparam("sec_style" ,"Mini Bags")}> Mini Bags </button>
                            {typefilter ?
                           <button onClick={()=>setsearchparam()}> All </button>
                           :
                           null
                            }
    
                        </nav>
                        <div className="box_product">
                            {listHiking}
                        </div>
               
            </>
        )

    }

    return (

        <>
          <div className="container">
                    <section className="block_product">
                        <div className="text-start mb-4 mt-4"> </div>
                        <Suspense fallback={<Loading />}>
                         <Await resolve={dataPromise.products}>
                        {renderProductelement}
                         </Await>

                        </Suspense>
                        </section>
                        </div>
        
        </>
    )

}