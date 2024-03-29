import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useNotification } from "../../Notificacion/Hooks/useNotification";

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    // const [products, setProducts] = useState()
    const [products, setProducts] = useState([]);

    const [render, setRender] = useState(false)

    const { category } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 2000)
    }, [])

    useEffect(() => {

        const asyncFunction = category ? getProductsByCategory : getProducts

        asyncFunction(category)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error cargado los productos')
            })
    }, [category])

    return (
        <div>

            <h1 style={{ color: 'darkmagenta', fontFamily: 'arial', fontWeight: 'bold', margin: 10, fontSize: 45, display: 'flex', justifyContent: 'center' }}>{greeting}</h1>

            <div >
                <ItemListMemoized products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer

