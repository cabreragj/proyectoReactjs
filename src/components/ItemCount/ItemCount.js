

const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <div class="agregar-cantidad">
            <button onClick={handleRestar} className="btn-">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn+">+</button>
            </div>
            <button onClick={agregar} className="btn-d">Agregar al carrito</button>
        </div>
    )
}
export default ItemCount