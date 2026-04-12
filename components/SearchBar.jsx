import React, { useState } from 'react';

const SearchBar = () => {
  const [message,setMessage]=useState("");
  const [result, setResult]=useState([]);

  const getData=async(searchText)=>{
    try{
    const response=await fetch("https://dummyjson.com/products");
    const data=await response.json();

    const filteredData=data.products.filter((item)=>{
      const text=searchText.toLowerCase();

      return(
        item.title?.toLowerCase().includes(text) ||
        item.brand?.toLowerCase().includes(text) ||
        item.sku?.toLowerCase().includes(text)  || 
        item.category?.toLowerCase().includes(text)
      )
    });
    setResult(filteredData);
    }catch(error){
      console.log("error is ", error)
    }
  }

  const handleChange=(e)=>{
    console.log("hghf")
    const value=e.target.value;
    setMessage(value);
    getData(value);

  }


  // ... keep your state and getData logic the same ...

return (
  /* 1. Added 'relative' to the wrapper so 'absolute' children position correctly */
  <div className="relative flex w-full max-w-2xl items-stretch rounded-lg border border-gray-200 bg-white shadow-sm focus-within:border-blue-400 transition">
    
    {/* Input Field */}
    <input
      type="text"
      value={message}
      onChange={handleChange}
      placeholder="Search For Products..."
      className="w-full bg-transparent px-4 py-2.5 text-gray-700 outline-none placeholder:text-gray-400"
    />

    {/* 2. DROPDOWN BOX - Fixed Z-Index and positioning */}
    {message && result.length > 0 && (
      <div 
        className="absolute left-0 top-full z-[999] mt-2 w-full rounded-xl border border-gray-200 bg-white p-6 shadow-2xl max-h-[500px] overflow-y-auto"
      >
        <h3 className="mb-5 text-xl font-bold text-gray-800">Products</h3>
        
        <div className="flex flex-col gap-8">
          {result.map((item) => (
            <div
              key={item.id}
              className="group flex items-start gap-6 cursor-pointer"
            >
              {/* Product Image Container */}
              <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                {/* Simulated 'New' Badge like the image */}
                {item.id % 2 === 0 && (
                  <span className="absolute left-2 top-2 rounded-full bg-[#1e513d] px-3 py-0.5 text-[10px] font-bold text-white">
                    New
                  </span>
                )}
              </div>

              {/* Product Text */}
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold leading-tight text-gray-900 group-hover:text-blue-600">
                  {item.title} | {item.category}
                </h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    Rs. {Math.round(item.price * 80)}.00
                  </span>
                  <span className="text-base text-red-500 line-through">
                    Rs. {Math.round((item.price * 1.5) * 80)}.00
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Search Button */}
    <button 
      type="submit" 
      onClick={() => getData(message)}
      className="flex items-center justify-center bg-[#737373] px-4 text-white transition-colors hover:bg-gray-600 rounded-r-[10px]"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/>
      </svg>
    </button>
  </div>
);
};

export default SearchBar;