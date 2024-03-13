import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(result => {
                setProduct(result); // Aquí se debe usar 'result' en lugar de 'response'
            });
    }, [itemId]);

    return (
        <main>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product} />
        </main>
    );
};

export default ItemDetailContainer;

