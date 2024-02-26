import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import React from 'react'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import Navbar from './component/Navbar/navbar'
//import viteLogo from '/vite.svg'
//import './App.css'



function App() {

  return (
    <>
    
     <Navbar/>
     <ItemListContainer saludo= 'Bienvenido a LIBRA Ropa para Bebes'/>
     
    </>
  )
}

export default App