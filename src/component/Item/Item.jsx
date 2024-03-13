import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ id, name, category, price, img }) => {
    return (
        <article className="item">
        <h4 style={{ color: '#ff007f' }}>Categoría: {category} </h4>
        <h3 style={{ color: 'hotpink' }}>{name}</h3>
        <img src={img} style={{ width: '250px', borderRadius: '5px' }} alt={name} />
        <h4 style={{ color: 'purple' }}>${price}</h4>
        <Link to={`/itemId/${id}`} style={{ color: 'blue', textDecoration: 'underline' }}>Ver detalle</Link>
    </article>
    
    );
}

export default Item
