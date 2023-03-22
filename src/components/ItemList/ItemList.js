import { Item } from "../Item/Item"
import './ItemList.css'


const ItemList = ( {items} ) => {

    return (
        <div className='list-container'>
            
            <div className='item'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList