import React, {useContext} from 'react';
import { ContextAPI } from '../ContextAPI';

export default function Cart(){

    const { cart, removeFromCart }=useContext(ContextAPI);
    return(
        <>
     
        <h1>Cart</h1>
        <div className="products">
        {cart.map((product, idx)=>(
          <div className="product" key={idx}>
            <h3>{product.title}</h3>
            <h4>Rs {product.price}</h4>
            <img src={product.image} />
            <button onClick={()=>removeFromCart(product)}>remove</button> 
            </div>
        ))}
       </div>
       </>
    )
}