import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import './Cart.css'


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    return (
        <div className="container">
            <h2>Tu compra</h2>
            <div className="list-container">
            {
                cart.map((item) => ( 
                    <div className="item-cart" key={item.id}>
                        <h4 class="card-title">{item.name}</h4>
                        <img class="card-image" src={item.img} alt={item.nombre}/>
                        <div>
                            <p class="card-description">Cantidad: {item.cantidad}</p>
                            <p class="card-description">Precio unitario: {item.precio}</p>
                        </div>
                        <p class="card-description">Precio total: {item.precio * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn-d"><BsFillTrashFill/></button>
                        <hr class="caesar" />
                    </div>
                ))
            }
            </div>
        <div className="btn-container">
            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn-d">Vaciar carrito</button>
        </div>
        </div>
    )
}

export default Cart