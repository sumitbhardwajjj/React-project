import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from './component/Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './component/Cart'
import {Provider} from 'react-redux'
import store from './component/store'
import Home from './component/Home'

const App = () => {
  return (
  <Provider store={store}>
     <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/pro' element={<Products/>}/>
    <Route path='/bag' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
  </Provider>
  )
}

export default App
