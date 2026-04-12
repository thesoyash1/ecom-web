import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart]=useContext(CartContext);

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">Products</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductNewCard key={item.id} product={item} onAdd={cartUpdate} />
        ))}
      </div>
    </div>
  );
};
 const cartUpdate=(products)=>{
        setCart((prev)=>{
            const productUpdate=[...prev, products];
            localStorage.setItem("cart",JSON.stringify(productUpdate));
            return productUpdate;
        })

    }
export const ProductNewCard = ({ product, onAdd }) => {

   
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-contain mb-3"
      />

      {/* TITLE */}
      <h3 className="font-semibold text-lg mb-2">
        {product.title.slice(0, 40)}...
      </h3>

      {/* PRICE */}
      <p className="text-green-600 font-bold text-lg mb-3">
        ${product.price}
      </p>

      {/* BUTTON */}
      <button
        className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;