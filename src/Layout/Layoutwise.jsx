import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";


export default function Layoutwise() {


return (
  <>
   <Header />
   <Outlet />
   <Footer/>  
  
  </>
)

}