import { useState } from 'react'
// import './App.css'
import HomePage from '../pages/HomePage';
import { CartProvider } from '../context/CartContext';
import Reduce from '../components/Reduce';
import Todo from '../components/Todo';
import { createBrowserRouter ,BrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import Header from '../components/Header';
import Account from '../pages/Account';
import NotFound from '../pages/NotFound';


const router=createBrowserRouter([
  {
    path : '/',
    element : <div> <Header/><HomePage /></div>
  },
  {
    path : "/add-to-cart",
    element : <div><Header/><CartPage /></div>
  },
  {
    path : 'account',
    element :<div><Header/> <Account /></div>
  },
  {
    path : '*',
    element : <NotFound />
  }
])
function App() {
  // const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App;

//Implement complex forms and validations using Formik.

