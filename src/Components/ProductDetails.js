import React from 'react' ;
import { useParams } from 'react-router-dom';

function ProductDetails() {
 const {productId} = useParams();

  return (
    <div>
       Show Product Details of : {productId}, by staying on the main page "Product" using nested routing. 
    </div>
  ) ;
}

export default ProductDetails ;