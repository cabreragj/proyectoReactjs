import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import './Cart.css'


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    return (
        <div className="container">
            <div className="list-container">
            <h2>Tu compra</h2>
            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img} alt={item.nombre}/>
                        <div>
                            <small>Cantidad: {item.cantidad} Precio un: {item.precio}</small>
                        </div>
                        <p>Precio total: {item.precio * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn"><BsFillTrashFill/></button>

                    </div>
                ))
            }
            </div>
        <div className="btn-container">
            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn">Vaciar carrito</button>
        </div>
        </div>
    )
}

export default Cart