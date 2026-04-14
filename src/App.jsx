import { useState } from 'react'
// import './App.css'
import HomePage from '../pages/HomePage';
import { CartProvider } from '../context/CartContext';
import Reduce from '../components/Reduce';
import Todo from '../components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/CartPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-to-cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>    
  )
}

export default App
