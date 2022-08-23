import React from 'react'
import SProducto from '../Productos/SProducto'
import { useCartContext } from './CartContext'
const cartItem = () => {
    const { removeP } = useCartContext;
    return (
        <>
            {
                SProducto.map((value) => {


                    return (
                        <div className='cart-item'>
                            <img src={value.cover} alt="" />
                            <div>
                                <h2>{value.title}</h2>
                                <h4>${value.price}</h4>
                                <h4>Cantidad{value.quantity}</h4>
                                <p>Subtotal: ${value.quantity * value.price}</p>
                                <button onClick={() => removeP(value.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                    )
                })
            }</>)
}

export default cartItem