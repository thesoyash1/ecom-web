import { useState } from 'react'
// import './App.css'
import HomePage from '../pages/HomePage';
import { CartProvider } from '../context/CartContext';
import Reduce from '../components/Reduce';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <CartProvider>
      
     <HomePage />
    </CartProvider>
  )
}

export default App
