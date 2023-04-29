

import { useOutletContext as shopdetails } from "react-router-dom"
export default function Materials() {
    const { product } = shopdetails()
    return (
        <>
        <h2> this is Materials</h2>
        {product.description}
        </>
    )
}
