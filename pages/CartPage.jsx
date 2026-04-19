import React, {useContext} from 'react';
import { CartContext, CartProvider } from '../context/CartContext';
import ProductCard, { ProductNewCard } from '../components/ProductCard';

const CartPage = () => {

  const {cart}=useContext(CartContext);
  console.log("cart go" , cart)
  
  return (
    <div>
      <div className='grid grid-cols-3'>
     {cart.map((item)=>
     <div key={item.id}>
      <img src=''alt={item.alt} />
     {/* <p>{item.title}</p> */}
     <ProductNewCard key={item.id} product={item} />
     </div>
    )}
    </div>
    </div>
  )
}

export default CartPage;
