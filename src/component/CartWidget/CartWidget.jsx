 import Cart from './assest/pngwing.com.png'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <button>
            <img width='30px' height='30px' src={Cart} />
            { totalQuantity }
        </button>
    )
}

export default CartWidget