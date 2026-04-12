import React from 'react'
import SearchBar from './SearchBar';
import AnnoucementBar from './AnnoucementBar';
import HeaderContent from './HeaderContent';
import MegaMenu from './MegaMenu';
import ProductCard from './ProductCard';

function Header() {
  return (
    <div>
      <AnnoucementBar />
      <HeaderContent />
      <MegaMenu />  
      <ProductCard />
    </div>
  )
}

export default Header;
