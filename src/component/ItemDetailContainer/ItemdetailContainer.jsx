import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductById('2')
            .then(result => {
                setProduct(result);
            })
    }, []);
    return (
        <main>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product} /> {/* Usar el nombre correcto, que es product */}
        </main>
    )
}

export default ItemDetailContainer
