import React from 'react';
import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo'




const Navbar = () => {

  return (
    <>

      {<header className={classes.header}>
        <Logo />
        <nav className="d-flex align-items-center gap-2">

          <button
            className='btn cute-button'
            style={{
              marginRight: '10px', backgroundColor: '#ffcccb', borderRadius: '5px', color: 'black', fontWeight: 'bold', padding: '10px 20px', border: '2px solid #6a4d7a', transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff9999'; e.target.style.borderColor = '#6a5acd';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ffcccb'; e.target.style.borderColor = '#6a4d7a';
            }}
          >
            Ropa Nena
          </button>

          <button
            className='btn cute-button'
            style={{
              marginRight: '10px', backgroundColor: '#ffcccb', borderRadius: '5px', color: 'black', fontWeight: 'bold', padding: '10px 20px', border: '2px solid #6a4d7a', transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff9999';
              e.target.style.borderColor = '#6a5acd';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ffcccb';
              e.target.style.borderColor = '#6a4d7a';
            }}
          >
            Ropa Nene
          </button>

          <button
            className='btn cute-button'
            style={{
              marginRight: '10px', backgroundColor: '#ffcccb', borderRadius: '5px', color: 'black', fontWeight: 'bold', padding: '10px 20px', border: '2px solid #6a4d7a', transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff9999';
              e.target.style.borderColor = '#6a5acd';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ffcccb';
              e.target.style.borderColor = '#6a4d7a';
            }}
          >
            Accesorios
          </button>
        </nav>
        <CartWidget />
      </header>}

    </>
  );
};

export default Navbar