import { Item } from "../Item/Item"
import './ItemList.css'


const ItemList = ( {items} ) => {

    return (
        <div className='list-container'>

                { items.map((producto) => <Item key={producto.id} item={producto}/>) }

        </div>
    )
}

export default ItemList