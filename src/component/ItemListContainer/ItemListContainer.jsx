import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
    }, []) 

    return (
        <div>
            <h1 style={{ color: 'darkmagenta', fontFamily: 'arial', fontWeight: 'bold', margin: 10, fontSize: 45, display: 'flex', justifyContent: 'center' }}>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
