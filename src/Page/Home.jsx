
import { useLoaderData, defer , Await} from "react-router-dom"
import { useContext , Suspense } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/Context"
import Loading from "../Loading";
import homecampgear from "../assest/img/home-campgear.jpg"
import pict_abaout from "../assest/img/homecamp_gear.jpg"
import pict_cat1 from "../assest/img/cat_climbing.jpg"
import pict_cat2 from "../assest/img/cat_hiking.jpg"
import pict_cat3 from "../assest/img/cat_Mountain.jpg"
import slide1 from "../assest/img/wise_slide1.jpg"

import { getHomePage } from "../api"

export function loader() {

  return defer({ products: getHomePage() })
}

export default function Home() {

  const { addToCart } = useContext(CartContext);

  const dataPromise = useLoaderData()

  console.log("product", dataPromise)


  function renderProductelement(products) {

    const homeproduct = products.map(item => (
      <div key={item.id}>


        <div>
          <Link to={item.id}>  <img className="pic_wise" src={item.imageUrl} alt={item.name} />
          </Link>

        </div>
        <div className="meta_wise mt-4">
          <h4 className="mb-0">{item.name}
          </h4>
          <p className="mb-2"> {item.style} </p>
          <p> ${item.price} </p>
          </div>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    ))

    return(

      <div className="box_product">
       {homeproduct}
      </div>
    )
  }

  return (

    <>
      <div className="home_wise">
        <div className="section_slide">
          <img src={slide1} className="img_slide" alt="campgear" />
          <div className="text_slide">
            <h1>Start your Adventure now</h1>
            <div className="home_link mt-4">
              <Link className="btn_home" to="/shop"> SHOP NOW</Link>
            </div>
          </div>
        </div>
       <div className="container">
        <div className="text-center text_home mt-5 mb-5">
          <p>CampGear was forged around a campfire through the realization  that discovery is  a lifelong <br /> undertaking that should be within reach of everyone. We are driven to extend <br /> and deepen outdoor  experiences by providing  the most sustainable  <br /> solutions for apparel, footwear, and equipment,</p>
        </div>
        </div>
      
          <section className="favoriteproduct">
            <div className="section_titre mb-5">
              <h2 className="text-center">Must Haves</h2>
              <p className="text-center">
              Some of our favourite picks this week.
              </p>
              </div>
          <Suspense fallback={<Loading />}>
            <Await resolve={dataPromise.products}>
               {renderProductelement}
            </Await>
         </Suspense>
         </section>
         <section className="about mt-5 mb-5">
          <div className="container">
            <div className="row align-items-center">
           <div className="col-6"> 
           <div className="block_des text-center">
            <h2> Homegrown</h2>
            <p>
            We love all of our beautiful brands here at  CampGear but there is a special place in our heart for the Tunisian brands.
             We have made it easy for you to find a little about each of these amazing brands. 
            Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special.
           </p>
           </div>
            </div>
           <div className="col-6">    
           <img src={pict_abaout} alt="CampGear" /> 
           </div>
            </div>
          </div>
         </section>
         <div className="container">

          <div className="d-flex mt-3 mb-5 justify-content-center">
            <div className="box_wiseCateg">
              <div className="picture_cate">
                <img src={pict_cat1} alt="climbing" />
                
                <Link to="/climbing">
                <div className="card_cate">
                  <p className="mb-0">
                    Shop now
                  </p>
                </div>
                </Link>
              </div>
              <div className="box_cate">
              <div className="title-cetg">
              <h3> Climbing </h3>
              </div>
                <p className="mb-0 sub_title"> Scaling heights, conquering fears.</p>
              </div>
              </div>
              <div className="box_wiseCateg">
              <div className="picture_cate">

                <img src={pict_cat2} alt="hiking" />
                <Link to="/hiking">
                <div className="card_cate">
                  <p className="mb-0">
                    Shop now
                  </p>
                </div>
                </Link>

              </div>
              <div className="box_cate">
              <div className="title-cetg">
              <h3> Hiking </h3>
              </div>
                <p className="mb-0 sub_title"> Find beauty in the journey</p>
              </div>
            </div>

            <div className="box_wiseCateg">
            <div className="picture_cate">

            <img src={pict_cat3} alt="mountain" />
         
            <Link to="/mountain">
            <div className="card_cate">
                  <p className="mb-0">
                    Shop now
                  </p>
                </div>
              </Link>
            </div>
            <div className="box_cate">
              <div className="title-cetg">
              <h3> Mountain </h3>
              </div>
                <p className="mb-0 sub_title"> Scale new heights, embrace challenge.</p>
              </div>
            </div>
            

          </div>
          </div>

          <section className="footer_before">
            <img src={homecampgear} alt="CampGear" />
          </section>
      </div>

    </>
  )
}