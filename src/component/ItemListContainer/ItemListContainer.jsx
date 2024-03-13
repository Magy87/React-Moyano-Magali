import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { category: categoryId } = useParams(); // Aquí se utiliza useParams correctamente

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        asyncFunction(categoryId)
            .then(result => {
                setProducts(result);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 style={{ color: 'darkmagenta', fontFamily: 'arial', fontWeight: 'bold', margin: 10, fontSize: 45, display: 'flex', justifyContent: 'center' }}>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;

