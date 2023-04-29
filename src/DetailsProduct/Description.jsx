
import { useOutletContext as shopdetails} from "react-router-dom"

export default function Desciption() {


 
     const { product } = shopdetails()




  console.log("section description",product.sec_style)


    return(
        <>
        <div className="descr_wise">
          {product.description}
        </div>
        </>
    )
}