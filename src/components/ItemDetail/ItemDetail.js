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
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.marca}</p>
            <p>Precio: ${item.precio}</p>
            
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :   <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
        </div>
    )
}

export default ItemDetail