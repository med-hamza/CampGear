import { useEffect, useState, useContext, Suspense } from "react"
import { Link, useSearchParams, useLoaderData, defer, Await } from "react-router-dom"
import { CartContext } from "../context/Context"

import Loading from "../Loading";

import { getClimbing } from "../api";

export function loader() {

    return defer({ products: getClimbing() })
}

export default function Climbing() {

    const dataPromise2 = useLoaderData()

    console.log("dara" , dataPromise2)

    const { addToCart } = useContext(CartContext);

    const [searchpram, setsearchparam] = useSearchParams()
    const typefilter = searchpram.get("sec_style")



    //console.log( "filter" ,searchpram.toString())


    // useEffect(()=>{
    //     fetch("/api/climbing")
    //     .then((response)=> response.json())
    //     .then(data=>setshop(data.products))
    // })

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
        const listfiltre = typefilter ? products.filter(char => char.sec_style === typefilter)
            : products

        const listclimbing = listfiltre.map(item => (

            <div key={item.id} className="wise_product">
            <div className="wise_pr">
                <div>
                    <Link to={item.id} state={{ search: `?${searchpram.toString()}`, sec_style: typefilter }}  >  <img className="pic_wise" src={item.imageUrl} alt={item.name} />
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
            <h1> Products for Climbing </h1>
            <nav className="filtre_shop mt-4 mb-4">
                    <button className={`wise_filtre ${typefilter === "Jackets" ? "selected" : ""} `} onClick={() => handelchangeparam("sec_style", "Jackets")}> Jackets </button>
                    <button className={`wise_filtre ${typefilter === "Hiking Shoes" ? "selected" : ""} `} onClick={() => handelchangeparam("sec_style", "Hiking Shoes")}> Hiking Shoes </button>
                    <button className={`wise_filtre ${typefilter === "Pants & Shorts" ? "selected" : ""}`} onClick={() => handelchangeparam("sec_style", "Pants & Shorts")}> Pants & Shorts </button>

                    {typefilter ?
                        <button className="wise_clear" onClick={() => setsearchparam()}> All</button>
                        :
                      null
                    }

                </nav>
                <div className="box_product">
                    {listclimbing}
                </div>
            </>
        )
    }

    return (

        <>
            <div className="container">
                <section className="block_product">
                    <div className="text-start mb-4 mt-4"> 
                        <Suspense fallback={<Loading />}>
                            <Await resolve={dataPromise2.products}>
                                {renderProductelement}
                            </Await>
                        </Suspense>
                    </div>
                </section>
            </div>
        </>
    )



}