import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { useNotification } from '../../Notificacion/Hooks/useNotification';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="counter-container">
        <p>{count}</p>
        <div className="button-container">
            <button onClick={decrement} className="counter-button">-</button>
            <button onClick={() => onAdd(count)} className="counter-button">Agregar al carrito</button>
            <button onClick={increment} className="counter-button">+</button>
        </div>
    </div>
    

    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const ItemCount = stock === 0 ? InputCount : ButtonCount;
    const { addItem, isInCart } = useContext(CartContext);
    const { showNotification } = useNotification();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd);
        showNotification('success', `Se agregó correctamente ${quantity} ${name}`);
        addItem(objProductToAdd);
    }

    return (
        <article className="item-container">
            <header>
                <h2 className="item-name">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="item-img" />
            </picture>
            <section>
                <p className="item-category">
                    Categoría: {category}
                </p>
                <p className="item-description">
                    Descripción: {description}
                </p>
                <p className="item-price">
                    Precio: ${price}
                </p>
            </section>
            <footer className='footer'>
                {
                    !isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <>
                            <div className="link-container">
                                <Link to='/' className="link">Seguir comprando</Link>

                            </div>
                            <div className="link-container">
                                <Link to='/cart' className="link">Finalizar compra</Link>
                            </div>
                        </>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;


