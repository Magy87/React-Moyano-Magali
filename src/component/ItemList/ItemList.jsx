import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <section className="item-list-container"> 
            {products.map(product => {
                return <Item key={product.id} {...product} />
            })}
        </section>
    )
}

export default ItemList
