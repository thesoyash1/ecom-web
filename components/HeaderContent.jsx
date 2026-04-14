import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/slogo.jpg"
import { CartContext } from "../context/CartContext";

const HeaderContent = () => {
  const {cart}=useContext(CartContext)
  console.log("carttt", cart);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-5 py-1">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        
        {/* LEFT: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto md:h-10" />
          </a>
        </div>

        {/* CENTER: Search */}
        <div className="mx-4 hidden w-full max-w-xl md:block">
          <SearchBar />
        </div>

        {/* RIGHT: Account & Cart */}
        <div className="flex items-center space-x-5 text-gray-700">
          
          {/* Account */}
          <button
            aria-label="Account"
            className="flex items-center space-x-1 transition-colors hover:text-blue-600"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path fill="none" d="M0 0h48v48H0z" />
              <path
                d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
                c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38
                C43,35.665,38.16,28.531,31.278,25.525z
                M16,16c0-4.411,3.589-8,8-8s8,3.589,8,8
                c0,4.411-3.589,8-8,8S16,20.411,16,16z
                M24,28c6.977,0,12.856,5.107,14.525,12H9.475
                C11.144,33.107,17.023,28,24,28z"
                 style={{
                    fill: "gray",
                    
                  }}
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            aria-label="Cart"
            className="relative flex items-center space-x-1 transition-colors hover:text-blue-600"
          >
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M11,20.5h.1m5.9,0h.1"
                  style={{
                    fill: "none",
                    stroke: "rgb(44, 169, 188)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="M3,3H5.14a1,1,0,0,1,1,.85L6.62,7,8,16l11-1,2-8H6.62"
                  style={{
                    fill: "none",
                    stroke: "gray",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
              </svg>

              {/* Cart Badge */}
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </div>

           
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
};

export default HeaderContent;