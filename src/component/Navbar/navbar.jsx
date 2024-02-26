import React from 'react';
import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget';




const Navbar = () => {
    // console.log(classes)
  return (
    <>
       
       { <header className={classes.header}>
       <h4 style={{display:'flex', justifyContent:'center', background:'pink', color:'purple', fontSize:40, alignItems:'center'}}>LIBRA </h4>
      <nav style={{ display:'flex', justifyContent:'center', background:'pink', color:'red', fontSize:30, alignItems:'center', marginRight: '10px'}}>
      <button  className='btn btn-outline-success' >Ropa Nena</button>
      <button className='btn btn-outline-success'>Ropa Nene</button>
      <button className='btn btn-outline-success'>Accesorio</button>
      </nav>
      <CartWidget/>
      </header>}  
   
    </>
  );
};

export default Navbar