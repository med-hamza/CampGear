import { useEffect, useState , useContext, Suspense } from "react"
import { Link, useSearchParams, useLocation, useLoaderData, defer, Await  } from "react-router-dom"
import { CartContext } from "../context/Context"

import Loading from "../Loading";

import { getShop } from "../api";


// loader 

export function loader() {

    return defer({ products: getShop() })
}

export default function Shop() {

    const dataPromise= useLoaderData()

    console.log("dadazazd",dataPromise)

    const { addToCart } = useContext(CartContext);

    const [searchpram , setsearchparam] = useSearchParams()
    const typefilter = searchpram.get("style")


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

    function renderProductelement(products)  {

        const allfiltre = typefilter ? products.filter(word=>word.style=== typefilter) : products

        const allproduct = allfiltre.map(item => (
    
            <div key={item.id}>
    
                <div>
                    <Link to={item.id} state={{ search: `?${searchpram.toString()}`, style: typefilter }}  >  <img className="pic_wise" src={item.imageUrl} alt={item.name} />
                    </Link>
    
                </div>
                <div className="title_wise"><h4>{item.name}</h4></div>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                
    
            </div>
    
        ))
        return (

            <>
                        <nav className="filtre_shop mt-4 mb-4">
    
                        <button onClick={()=>handelchangeparam("style","clothing")}>  Clothing </button>
                        <button onClick={()=>handelchangeparam("style","footwear")}> Footwear </button>
                        <button onClick={()=>handelchangeparam("style","equipment")}> Equipment </button>
    
                        {typefilter ?
                        <button onClick={()=>setsearchparam()}> All </button> :
                        null }
                        </nav>
                        <div className="box_product">
                            {allproduct}
                        </div>
            </>
        )

    }



    


    return (

        <>
      <div className="container">
        <section className="block_product">
        <div className="text-start mb-4 mt-4"> <h1> All Products </h1>
        <Suspense fallback={<Loading />}>
            <Await resolve={dataPromise.products}>
               {renderProductelement}
            </Await>
         </Suspense>
        </div>
        </section>
        </div>
        </>
    )
}