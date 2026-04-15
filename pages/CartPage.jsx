import React, {useContext} from 'react';
import { CartContext, CartProvider } from '../context/CartContext';

const CartPage = () => {

  const {cart}=useContext(CartContext);
  console.log("cart go" , cart)
  
  return (
    <div>
     {cart.map((item)=>
     <div key={item.id}>
     <p>{item.title}</p>
     </div>
    )}
    </div>
  )
}

export default CartPage;
