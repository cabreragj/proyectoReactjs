import { BsCart4 } from "react-icons/bs";
import './CartLogo.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


export const CartLogo = () => {
    const { totalCantidad } = useContext(CartContext)
    return (
        <Link to="/Cart" className="CartLogo">
            <BsCart4 className='CartLogo__icon'/>
            <span> {totalCantidad()}</span>
        </Link>
    )
}