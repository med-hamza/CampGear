
import LazyLoad from "react-lazy-load" 

import fire from "./assest/img/icons-fire.gif"
export default function Loading() {


  return(

    <>
    <LazyLoad height={350} offsetVertical={500}>
        <div className="text-center">
      <img src={fire} alt='fire' />
      </div>
    </LazyLoad>  
    </>
  )
}