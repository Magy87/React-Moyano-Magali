import ItemCount from "../ItemCount/ItemCount"
import { getProductById } from "../../asyncmock"
import './ItemDetail.css';

const ItemDetail = ({id, name, category, price, img, stock, description }) => {
    return (
        <article className="item-container"> 
        <h4 style={{ color: '#ff007f' }}>Categoría: {category}</h4>
        <img src={img} className="item-img" alt={name} />
        <h3 className="item-name">{name}</h3>
        <h4 className="item-price">${price}</h4>
        <h4 className="item-description">Descripción: {description}</h4>
        <ItemCount stock={stock} />
    </article>
    )
}

export default ItemDetail