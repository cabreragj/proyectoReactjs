import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { collection, addDoc, query, where, documentId, writeBatch, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"

export const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const order = {
            cliente: values,
            items: cart,
            total: totalCarrito()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, order)
            setOrderId(id)
            vaciarCarrito()

        } else {
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>La compra fue ingresada correctamente</h2>
                <hr/>
                <p>Tu número de orden es el siguiente: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="containerForm">
            <h2>Por favor llená el formulario</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    className="form-item"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    value={values.direccion}
                    type="text"
                    className="form-item"
                    placeholder="Direccion"
                    name="direccion"
                    onChange={handleInputChange}
                />
                <input
                    value={values.email}
                    type="email"
                    className="form-item"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}