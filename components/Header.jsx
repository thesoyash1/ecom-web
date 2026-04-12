import React from 'react'
import SearchBar from './SearchBar';
import AnnoucementBar from './AnnoucementBar';
import HeaderContent from './HeaderContent';
import MegaMenu from './MegaMenu';

function Header() {
  return (
    <div>
      <AnnoucementBar />
      <HeaderContent />
      <MegaMenu />  
    </div>
  )
}

export default Header;
