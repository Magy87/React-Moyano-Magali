import React from 'react';
import classes from './Navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useEffect, useState } from 'react';
import { db } from '../../service/firebase/firebaseConfig';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate(); // Usa useNavigate

  useEffect(() => {
    const categoriesCollection = query(collection(db, 'categories'), orderBy('order'));
    getDocs(categoriesCollection)
      .then(querySnapshot => {
        const categoriesAdapted = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setCategories(categoriesAdapted);
      })
      .catch(error => {
        console.error('error');
      });
  }, []);

  return (


    <header className={classes.header}>
      <Link to="/" className={classes.logoLink}>
        <Logo />
      </Link>
      <nav className={`d-flex align-items-center gap-2 ${classes.nav}`}>
        {categories.map(cat => (
          <Link key={cat.id} to={`/category/${cat.slug}`} className={classes.button}>
            {cat.name}
          </Link>
        ))}
      </nav>
      {/* <nav className={`d-flex align-items-center gap-2 ${classes.nav}`}>
        {
          categories.map(cat => {
            return <Link key={cat.id} to={`/category/${cat.slug}`} > {cat.name}
            </Link>
          })
        }
      </nav> */}
      <CartWidget />
    </header> 


  );
};

export default Navbar;


