import './App.css';
import Navbar from './component/Navbar/navbar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemdetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './Notificacion/NotificationService'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenido a LIBRA Ropa para Bebes' />} />
              <Route path='/category/:category' element={<ItemListContainer greeting='Productos de la Categoria' />} />
              <Route path='/itemId/:itemId' element={<ItemDetailContainer />} />

            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>

    </>
  );
}

export default App

