import React from 'react'
import SProducto from '../Productos/SProducto'
import { useCartContext } from './CartContext'
const cartItem = ({ SProducto }) => {
    const { removeP } = useCartContext;
    return (
        <div className='cart-item'>
            <img src={SProducto.cover} alt="" />
            <div>
                <h2>{SProducto.tittle}</h2>
                <h4>${SProducto.price}</h4>
                <h4>Cantidad{SProducto.quantity}</h4>
                <p>Subtotal: ${SProducto.quantity * SProducto.price}</p>
                <button onClick={() => removeP(SProducto.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}

export default cartItem