import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className='detalle'>
            <h2 class="card-title">{item.nombre}</h2>
            <img class="card-image" src={item.img} alt={item.nombre}/>
            <p class="card-description">{item.marca}</p>
            <p class="card-description">Precio: ${item.precio}</p>
            
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn-d">Terminar mi compra</Link>
                :   <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
            <hr class="caesar" />
        </div>
    )
}

export default ItemDetail