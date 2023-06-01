import './App.scss'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../api/products'
import { setProducts } from './redux/slices/productsSlice'


import Header from './components/Header/Header'

import Shops from './Pages/Shops'
import Coupons from './Pages/Coupons'
import Cart from './Pages/Cart'





function App() {
const dispatch = useDispatch();
const products = useSelector((state)=>state.products);

React.useEffect(()=>{
  const getProducts = async () =>{
    try {
      const data = await fetchProducts();
      dispatch(setProducts(data));
    } catch(error){
      console.log('Failed to fetch products', error)
    }
  };
  getProducts();
}, [dispatch]);
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' index element={<Shops/>}/>
      <Route path='/Coupons' element={<Coupons/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </div>
  )
}

export default App;
  