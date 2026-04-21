import React from "react";
import slogo from "../assets/slogo.jpg";
import rev from "../assets/rev.webp"
import run from "../assets/run.webp";
import meta2 from "../assets/meta2.webp";
import meta3 from "../assets/meta3.webp";
import meta4 from "../assets/meta4.webp";
import meta5 from "../assets/meta5.webp";


const images = [meta2, meta3, meta4, meta5, meta2];

function HeroBanner() {
  return (
    <div className="w-full h-[400px] flex overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className="
            flex-1 
            transition-all 
            duration-800 
            ease-in-out 
            hover:flex-[3]
            hover:cursor-pointer
          "
        >
          <img
            src={img}
            alt={`hero-banner-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default HeroBanner;