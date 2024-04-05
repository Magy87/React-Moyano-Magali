import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ id, name, category, price, img }) => {
    return (

        <article className="item">
            <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                <h4 style={{ color: '#ff007f' }}>Categoría: {category} </h4>
                <h3 style={{ color: 'hotpink' }}>{name}</h3>
                <img src={img} style={{ width: '250px', borderRadius: '5px', marginBottom: '10px' }} alt={name} />
                <h4 style={{ color: 'purple', marginBottom: '10px' }}>${price}</h4>
                <Link to={`/itemId/${id}`} className="linkStyle">Ver detalle</Link>
            </div>

        </article>

    );
}

export default Item
