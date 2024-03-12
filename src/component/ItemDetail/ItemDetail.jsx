import ItemCount from "../ItemCount/ItemCount"
import { getProductById } from "../../asyncmock"

const ItemDetail = ({ name, category, price, img, stock, description }) => {
    return (
        <article>
            <h4>Categoria: {category}</h4>
            <img src={img} style={{ width: 100 }} />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <h4>Descripcion: {description}</h4>
            <ItemCount stock={stock} />

        </article>
    )
}

export default ItemDetail