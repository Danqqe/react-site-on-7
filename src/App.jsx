import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import Main from './Components/Main/slider';
import AllCards from './Components/Main/AllCards';
import SideCart from './Components/Cart/SideCart';
import { Routes, Route } from 'react-router-dom';
import Favourites from './Components/Main/Favourites'
import Profile from './Components/Main/Profile';


function App() {
  
  const[openCart,setOpenCart]=useState(false)
  const [cart,setCart,SetCart]=useState([])
  function addProdToCart(newProd) {

    let alreadyAdded = false

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == newProd.id) {
            alreadyAdded = true
        }

    }

    if (!alreadyAdded) {

        SetCart(prev => [...prev, newProd])

    }
    else {
        SetCart(cart.filter(p => p.id !== newProd.id));
    }
}

  function addProdToCart(newProd){
    setCart(prev=>[...prev,newProd])
  }

  return<>
  <SideCart openCart={openCart} onOpenCart={() =>setOpenCart(false)} cart={cart}/>
  <Header onCloseCart={() =>setOpenCart(true)} cart={cart}/>

  <Routes>
    <Route path='/' element={<><Main addProdToCart={(newProd) => addProdToCart(newProd)} />  <AllCards  addProdToCart={(newProd) => addProdToCart(newProd)}/></>}></Route>
    <Route path='/favourites' element={<Favourites />}/>
    <Route path="/profile" element={<Profile />}/>
  </Routes>
  </>

  
    
  ;

}

export default App;
