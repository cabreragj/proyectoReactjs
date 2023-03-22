
const ItemDetail = ( {item} ) => {

    return (
        <div className='detalle'>
            <h2>{item.nombre}</h2>
            <img src={item.img}/>
            <p>{item.marca}</p>
            <p>Precio: ${item.precio}</p>
        </div>
    )
}

export default ItemDetail