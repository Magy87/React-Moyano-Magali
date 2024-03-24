import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

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
        <div>
            <p>{count}</p>
            <button onClick={decrement} style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: 'black', borderRadius: '5px', marginRight: '5px' }}>-</button>

            <button onClick={() => onAdd(count)} style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: 'black', borderRadius: '5px', marginRight: '5px' }}>Agregar al carrito</button>

            <button onClick={increment} style={{ backgroundColor: 'rgba(255, 182, 193, 0.5)', color: 'black', borderRadius: '5px' }}>+</button>


        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [quantity, setQuantity] = useState(0)


    const ItemCount = stock === 0 ? InputCount : ButtonCount
   
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)

        setQuantity(quantity)

        addItem(objProductToAdd)
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
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail

