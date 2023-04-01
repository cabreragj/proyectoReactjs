import { Link } from "react-router-dom"
import './Item.css'

export const Item = ( {item} ) => {

    return (
        <div className='card'>
            <h2 class="card-title">{item.nombre}</h2>
            <img class="card-image"src={item.img}/>
            <p class="card-description">{item.marca}</p>
            <p class="card-description">Precio: ${item.precio}</p>
            <p class="card-description"><small>Categoría: {item.tipo}</small></p>
            <Link to={`/detail/${item.id}`} className='btn-d'>Ver más</Link>
            <hr class="caesar" />
        </div>
    )
}
