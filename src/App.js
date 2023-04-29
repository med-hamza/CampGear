import './index.css';
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layoutwise from './Layout/Layoutwise';
import Home  , {loader as homeLoader}  from './Page/Home';
import Hiking , {loader as hikingLoader}  from './Page/Hiking';
import "./server"

import HikingDetails , {loader as hikingdetLoader}  from './Page/HikingDetails';

import Desciption from './DetailsProduct/Description';
import Materials from './DetailsProduct/Materials';
import Technology from './DetailsProduct/Technology';
import Shop , {loader as productLoader}  from './Page/Shop';

import Shopdetails , {loader as detailsLoader }  from './Page/Shopdetails';

import Climbing , {loader as climbingLoader}  from './Page/Climbing';

import ClimbingDetails , {loader as climbindetails}   from './Page/ClimbingDetails';
import Cart from './context/Cart';
import About from './Page/About';

const router= createBrowserRouter(createRoutesFromElements(

<Route element={<Layoutwise />}>

<Route path="/" element={<Home />}  loader={homeLoader}  />

<Route path="shop" element={<Shop />} loader={productLoader} />

<Route path="about" element={<About />} />

<Route path="cart" element={<Cart />} />

<Route path="hiking" element={<Hiking />} loader={hikingLoader} />

<Route path="climbing" element={<Climbing />} loader={climbingLoader} />

<Route path="shop/:id" element={<Shopdetails />}  loader={detailsLoader} >
<Route index element={<Desciption />}/>
<Route path="materials" element={<Materials />} />
<Route path="technology" element={<Technology />} />
</Route>
<Route path="hiking/:id" element={<HikingDetails/>} loader={hikingdetLoader} >
<Route index element={<Desciption />} />
<Route path="materials" element={<Materials />} />
<Route path="technology" element={<Technology />} />
</Route>
<Route path="climbing/:id" element={<ClimbingDetails />} loader={climbindetails}  >
<Route index element={<Desciption />} />
<Route path="materials" element={<Materials />} />
<Route path="technology" element={<Technology />} />
</Route>
<Route path="*" element={<h1>Page not found!</h1>} />
</Route>

) )


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
