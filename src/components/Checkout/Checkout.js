import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"

export const Checkout = () => {

    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombres: '',
        apellido: '',
        direccion: '',
        email: ''

    }
    )

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {
            comprador: values,
            items: cart,
            total: totalCarrito()
        }
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

    if (orderId) {
        return (
            <div>
                <h3>Tu compra fue registrada correctamente</h3>
                <p>Tu numero de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to={"/"}/>
    }

    return (
        <div>
            <h3> Completa el formulario</h3>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="form control my-2"
                placeholder="Nombres"
                onChange={handleInputChange}
                name="nombres"
                />
                   <input
                type="text"
                className="form control my-2"
                placeholder="Apellido"
                onChange={handleInputChange}
                name="apellido"
                />
                   <input
                type="text"
                className="form control my-2"
                placeholder="Direccion"
                onChange={handleInputChange}
                name="direccion"
                />
                   <input
                type="email"
                className="form control my-2"
                placeholder="Email"
                onChange={handleInputChange}
                name="email"
                />
            </form>
            <button className="btn-d" type="submit">Enviar</button>
        </div>
    )
}