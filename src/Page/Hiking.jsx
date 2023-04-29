
import { useEffect, useState , useContext, Suspense} from 'react';
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
    
    
            <div key={item.id}>
                <div>
                  <Link to={item.id} state={{ search: `?${searchpram.toString()}`, sec_style: typefilter }} >  <img className="pic_wise" src={item.imageUrl} alt={item.name} />
                  </Link>
                  
                  </div>
                <div className="title_wise"><h4>{item.name}</h4></div>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        ))
    
    
        return (
    
    
            <>
              
                        <nav className="filtre_shop mt-4 mb-4">
                           <button onClick={()=>handelchangeparam("sec_style" ,"Backpacks & Bags")}> Backpacks & Bags </button>
                           <button onClick={()=>handelchangeparam("sec_style" ,"Sleeping Bags")}> Sleeping Bags </button>
                           <button onClick={()=>handelchangeparam("sec_style" ,"Mini Bags")}> Mini Bags </button>
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
                        <div className="text-start mb-4 mt-4"> <h1> Products for Hiking </h1></div>
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