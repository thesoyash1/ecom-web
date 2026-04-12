import { Children, createContext, useState } from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);

    <CartProvider value={{cart,setCart}}>
        {children}
    </CartProvider>
}