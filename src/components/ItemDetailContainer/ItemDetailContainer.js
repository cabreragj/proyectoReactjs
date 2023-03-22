import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemDetail from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === itemId) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container">
        
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}

