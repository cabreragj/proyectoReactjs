import { BsCart4 } from "react-icons/bs";
import './CartLogo.css';


export const CartLogo = () => {
    return (
        <div className="CartLogo">
            <BsCart4 className='CartLogo__icon'/>
            <span className="CartLogoNumero">0</span>
        </div>
    )
}