import React from 'react' ;
import { Link, Outlet } from 'react-router-dom';

function Product() {

  return (
    <div>
        <h1>Hello  Product Page! </h1> <br/>

        <Link to={"Mobile"} > Mobile </Link> <br/>
        <Link to={"Laptop"} > Laptop </Link>
        
        <hr/>

        <div>
            <Outlet/> 
        </div> 
        
    </div>
  ) ;
}

export default Product ;

// <Outlet/> component is there to display product details component,
//     which will be called through nested routing.
// 
