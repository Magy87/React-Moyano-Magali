import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import React from 'react'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/navbar'
import ItemCount from './component/ItemCount/ItemCount'

//import viteLogo from '/vite.svg'
import './App.css'
import ItemDetail from './component/ItemDetail/ItemDetail'
import ItemDetailContainer from './component/ItemDetailContainer/ItemdetailContainer'



function App() {

  return (
    <>
    
     <Navbar/>
     <ItemListContainer greeting= 'Bienvenido a LIBRA Ropa para Bebes'/>
     <ItemDetailContainer/>
    </>
  )
}

export default App