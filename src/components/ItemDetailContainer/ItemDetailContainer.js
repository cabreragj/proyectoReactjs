import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

import { db } from "../../Firebase/Firebase"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
             .then((doc) =>{
                setItem({
                    id: doc.id,
                    ...doc.data()
             })

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

