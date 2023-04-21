import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs,where, query } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("tipo", "==", categoryId))
                    : productosRef
        getDocs(q)
        .then((res) => {
            setProductos( res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        .finally(() => setLoading(false))
 
    }, [categoryId])

    return (
        <div className="container">
    
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

